import { HomePage } from "./homePage";
import { Page, expect } from "@playwright/test";
import { baseURL, NBRB } from "../utils/constants";

export class ApplicationPage extends HomePage {
    constructor(page: Page) {
        super(page);
        
        this.url= `${baseURL}nbrbapplications`
    };

    public async waitForPageTitle() {
        await expect(this.page).toHaveTitle(`Электронные обращения | ${NBRB}`);
    };
};