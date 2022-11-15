import { Page } from "@playwright/test";

export class BasePage {
    constructor (protected readonly page: Page) { }

    public async getPageTitle() {
      return await this.page.title();
    };

    public async getPageURL() {
        return this.page.url();
    };
};
