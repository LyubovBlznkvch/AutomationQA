import { Page, expect } from "@playwright/test";
import { baseUrl } from "../utils/constants";
import { BasePage } from "./basePage";
import { LANGUAGES } from "../utils/types";


export class HomePage extends BasePage {
    protected url: string;
    public constructor (page: Page) {
        super(page);
        this.url = baseUrl;
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
    const searchingBar = this.page.locator(".search__input").first();
    await searchingBar.type(text);
    await this.page.keyboard.press('Enter');
};

public async waitForTargetUrl() {
    expect(this.page).toHaveURL(this.url)
};

public async switchPageLanguage(language: LANGUAGES) {
    await this.page.locator(`//ul//li/a[text()='${language}']`).click();
};

};
