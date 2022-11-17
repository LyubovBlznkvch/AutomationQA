import { HomePage } from "./homePage";
import { Page } from "@playwright/test";
import { baseUrl } from "../utils/constants";


export class SearchingPage extends HomePage {

    constructor(page: Page) {
        super(page);
        
        this.url= `${baseUrl}search?searchText=`
    };

public isSearchingFormVisible() {
    const element = this.page.locator(".form-with-frame form-multiple");
    return element.isVisible();
}; 
};
