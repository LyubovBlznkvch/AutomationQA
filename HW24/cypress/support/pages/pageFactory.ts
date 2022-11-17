import { PAGES } from "../types/types";
import { AutoPage } from "./autoPage";
import { CatalogPage } from "./catalogPage";
import { HomePage } from "./homePage";

export class PageFactory {
    static getPage(pageName: PAGES) {
        switch (pageName) {
            case PAGES.HOME:
                return new HomePage();
                case PAGES.CATALOG:
                    return new CatalogPage();
                    case PAGES.AUTO:
                        return new AutoPage();                    
                    default:
                        return new HomePage();
        }
    }
}