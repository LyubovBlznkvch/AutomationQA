import { BasePage } from "./basePage"

export class CatalogPage extends BasePage {
    constructor() {
        super();
    };

    public getSectionButton() {
        return $('//span[text() = "Onlíner Prime"]');
    };
    public isElementDisplayed(locatorString: string) {
        return $(locatorString).isDisplayed();
    };
};

export const catalogPage = new CatalogPage();
