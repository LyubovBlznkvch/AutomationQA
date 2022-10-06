import { WebDriver } from "selenium-webdriver";
import { baseURL } from "../utils/constants";
import { HomePage } from "./homePage";
import { SELECTOR_TYPES } from "../utils/types";

export class EnglishHomePage extends HomePage {
    protected url: string;

    constructor(driver: WebDriver) {
        super(driver);
        
        this.url= `${baseURL}engl`
    };

    public async textGetter(locator: SELECTOR_TYPES, locatorString: string) {
        return await (await this.driverUtils.findElement(locator, locatorString)).getText();
    };

};
