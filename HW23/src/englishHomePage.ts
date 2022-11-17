import { HomePage } from "./homePage";
import { Page } from "@playwright/test";
import { baseUrl } from "../utils/constants";

export class EnglishHomePage extends HomePage {
    constructor(page: Page) {
        super(page);
        
        this.url= `${baseUrl}eng`
    };

    public async getHeaderElementText() {
        return this.page.locator(".section__header").textContent();
    };
};
