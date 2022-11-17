import { HomePage } from "./homePage";
import { Page, expect } from "@playwright/test";
import { baseUrl, NBRB } from "../utils/constants";

export class ApplicationPage extends HomePage {
    constructor(page: Page) {
        super(page);
        
        this.url= `${baseUrl}nbrbapplications`
    };

    public async waitForPageTitle() {
        await expect(this.page).toHaveTitle(`Электронные обращения | ${NBRB}`);
    };
};
