import { WebDriver } from "selenium-webdriver";
import { PAGES } from "../utils/types";
import { AdminprocPage } from "./adminprocPage";
import { ApplicationPage } from "./applicationPage";
import { EnglishHomePage } from "./englishHomePage";
import { HomePage } from "./homePage";
import { SearchingPage } from "./searchingPage";


export class PageFactory {
    constructor() {}

    static getPage(driver: WebDriver, pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage(driver);
            case PAGES.ADMINPOC:
                return new AdminprocPage(driver);
            case PAGES.APPLICATION:
                return new ApplicationPage(driver);
            case PAGES.ENGLISH:
                return new EnglishHomePage(driver);
            case PAGES.SEARCHING:
                return new SearchingPage(driver);
            default:
                return new HomePage(driver);

        }
    }
}
