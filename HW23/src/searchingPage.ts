import { HomePage } from "./homePage";
import { Page } from "@playwright/test";
import { baseURL } from "../utils/constants";


export class SearchingPage extends HomePage {

    constructor(page: Page) {
        super(page);
        
        this.url= `${baseURL}search?searchText=`
    };

public isElementVisible() {
    const element = this.page.locator(".form-with-frame form-multiple");
    return element.isVisible();
}; 

};
