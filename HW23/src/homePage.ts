import { Page, expect } from "@playwright/test";
import { baseURL } from "../utils/constants";
import { BasePage } from "./basePage";
import { LANGUAGE } from "../utils/types";


export class HomePage extends BasePage {
    protected url: string;
    constructor (page: Page) {
        super(page);
        this.url = baseURL;
    };
 public async visitPage () {
    this.page.goto(this.url);
 };
 public async getStatisticsElement () {
    return  this.page.locator("li a[href='#mm-56']");   
}; 
public async clickOnAdminProcButton () {
    await this.page.locator("li a[href='today/adminproc']").click();
};
public async clickOnApplicationsButton () {
    await this.page.locator(".hide-1024").click();
};

public async searchFor(text: string) {
    const searchingBar = this.page.locator(".search__input");
    await searchingBar.type(text);
    await this.page.keyboard.press('Enter');
};

public async waitForTargetUrl() {
    expect(this.page).toHaveURL(this.url)
};

public async switchPageLanguage(language: LANGUAGE) {
    await this.page.locator(`//ul//li/a[text()='${language}']`).click();
};

};
