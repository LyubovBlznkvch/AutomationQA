import { WebDriver } from "selenium-webdriver";
import { baseURL } from "../utils/constants";
import { HomePage } from "./homePage";
import { SELECTOR_TYPES } from "../utils/types";

export class SearchingPage extends HomePage {

    constructor(driver: WebDriver) {
        super(driver);
        
        this.url= `${baseURL}search?searchText=`
    };

    public async isDisplayedElementEnabled(locator: SELECTOR_TYPES, locatorString: string) {
        return await (await this.driverUtils.findElement(locator, locatorString)).isEnabled();
  
    };
};
