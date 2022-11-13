import { BasePage } from "./basePage"

export class CatalogPage extends BasePage {
    constructor() {
        super();
    };

    public getSectionButton() {
        return $('//span[text() = "Onlíner Prime"]');
    };
};

export const catalogPage = new CatalogPage();
