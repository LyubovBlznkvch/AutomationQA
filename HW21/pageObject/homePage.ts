import { WebDriver, Key, until } from "selenium-webdriver";
import { baseURL } from "../utils/constants";
import { LANGUAGE, SELECTOR_TYPES } from "../utils/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {

    constructor(driver: WebDriver) {
        super(driver);

        this.url = baseURL;
    };

    public async visitPage() {
        await this.driver.get(this.url);
    };

     public async getStatisticsElement () {
        return await this.driverUtils.findElement(SELECTOR_TYPES.CSS, "li a[href='#mm-56']");
    }; 

    public async clickOnAdminProcButton () {
        await (await this.driverUtils.findElement(SELECTOR_TYPES.CSS, "li a[href='today/adminproc']")).click();
    };

    public async clickOnApplicationsButton () {
        await (await this.driverUtils.findElement(SELECTOR_TYPES.CLASS_NAME, "hide-1024")).click();
    };

    public async getSearchBar() {
        return await this.driverUtils.findElement(SELECTOR_TYPES.CLASS_NAME, "search__input");
    };

    public async searchFor(text: string) {
        await this.driver.actions()
        .click(await this.getSearchBar())
        .sendKeys(text)
        .sendKeys(Key.RETURN)
        .perform();
    };

    public async waitForTargetUrl() {
        await this.driver.wait(until.urlIs(this.url));
    };

    public async switchPageLanguage(language: LANGUAGE) {
        await (await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//ul//li/a[text()='${language}']`)).click();
    };

};
