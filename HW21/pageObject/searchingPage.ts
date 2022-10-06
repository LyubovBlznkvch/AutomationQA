import { WebDriver, until } from "selenium-webdriver";
import { baseURL } from "../utils/constants";
import { HomePage } from "./homePage";
import { SELECTOR_TYPES } from "../utils/types";
import { defaultWaitingTime, NBRB } from "../utils/constants";

export class SearchingPage extends HomePage {
    protected url: string;

    constructor(driver: WebDriver) {
        super(driver);
        
        this.url= `${baseURL}search?searchText=`
    };

    public async isDisplayedElementEnabled(locator: SELECTOR_TYPES, locatorString: string) {
        return await (await this.driverUtils.findElement(locator, locatorString)).isEnabled();
  
    };

    public async isTitleContains() {
        await this.driver.wait(until.titleContains(`Поиск по сайту | ${NBRB}`), defaultWaitingTime); 

    };
};
