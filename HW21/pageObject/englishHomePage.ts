import { WebDriver } from "selenium-webdriver";
import { baseURL } from "../utils/constants";
import { HomePage } from "./homePage";
import { SELECTOR_TYPES } from "../utils/types";

export class EnglishHomePage extends HomePage {

    constructor(driver: WebDriver) {
        super(driver);
        
        this.url= `${baseURL}engl`
    };

    public async getHeaderElement() {
        return await this.driverUtils.getTextOfElement(SELECTOR_TYPES.CSS, ".section__header");
    };
 
};
