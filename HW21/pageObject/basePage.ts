import { WebDriver } from "selenium-webdriver";
import { DriverUtils } from "../utils/driverUtils";

export class BasePage {
    protected driverUtils: DriverUtils;
    constructor(protected readonly driver: WebDriver) {
        this.driverUtils = new DriverUtils(driver);
    }
    
    public async maxmizeWindow() {
        await this.driver.manage().window().maximize();
    };

    public async getPageTitle() {
        await this.driver.getTitle();
    }; 

    public async quitBrowser() {
        await this.driver.quit();
    };

};
