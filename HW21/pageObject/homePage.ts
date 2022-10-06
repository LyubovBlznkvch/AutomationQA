import { WebDriver, Key, until } from "selenium-webdriver";
import { baseURL } from "../utils/constants";
import { LANGUAGE, SELECTOR_TYPES } from "../utils/types";
import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    protected url: string;

    constructor(driver: WebDriver) {
        super(driver);

        this.url = baseURL;
    };

    public async visitPage() {
        await this.driver.get(this.url);
    };

    public async getNavigationItemByLocator (locator: SELECTOR_TYPES, locatorString: string) {
        return await this.driverUtils.findElement(locator, locatorString);
    }; 

    public async clickOnNavigationItemByLocator (locator: SELECTOR_TYPES, locatorString: string) {
        await (await this.getNavigationItemByLocator(locator, locatorString)).click();
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

    public async getTargetUrl() {
        await this.driver.wait(until.urlIs(this.url));
    };

   /*  public async pageLanguage(language: LANGUAGE) {
        await (await this.driverUtils.findElement(SELECTOR_TYPES.XPATH, `//ul//li/a[text()=${language}]`)).click();
    } */

    public async pageLanguageRU() {
        await this.clickOnNavigationItemByLocator(SELECTOR_TYPES.XPATH, "//ul//li/a[text()='RU']");
    };

    public async pageLanguageEN() {
        await this.clickOnNavigationItemByLocator(SELECTOR_TYPES.XPATH, "//ul//li/a[text()='EN']");
    };

    public async attributeGetter(locator: SELECTOR_TYPES, locatorString: string, attribute: string) {
        return await (await this.driverUtils.findElement(locator, locatorString)).getAttribute(attribute);
    };

};
