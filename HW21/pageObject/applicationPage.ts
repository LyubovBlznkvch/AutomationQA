import { WebDriver, until } from "selenium-webdriver";
import { baseURL, defaultWaitingTime } from "../utils/constants";
import { HomePage } from "./homePage";
import { NBRB } from "../utils/constants";

export class ApplicationPage extends HomePage {
    protected url: string;

    constructor(driver: WebDriver) {
        super(driver);
        
        this.url= `${baseURL}nbrbapplications`
    };

    public async waitForPageTitle() {
        await this.driver.wait(until.titleIs(`Электронные обращения | ${NBRB}`), defaultWaitingTime);
    };

};
