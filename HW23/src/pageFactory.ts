import { Page } from "@playwright/test";
import { PAGES } from "../utils/types";
import { ApplicationPage } from "./applicationPage";
import { EnglishHomePage } from "./englishHomePage";
import { HomePage } from "./homePage";
import { AdminProcPage } from "./adminProcPage";
import { SearchingPage } from "./searchingPage";

export class PageFactory {
    static getPage (page: Page, pageName: PAGES) {
        switch (pageName) {
           case PAGES.HOME:
            return new HomePage(page);
            case PAGES.ADMIN_PROC:
                return new AdminProcPage(page);
                case PAGES.APPLICATION:
                    return new ApplicationPage(page);
                    case PAGES.ENGLISH:
                        return new EnglishHomePage(page);
                        case PAGES.SEARCHING:
                            return new SearchingPage(page);
                            default:
                                return new HomePage(page);
        };
    };
};
