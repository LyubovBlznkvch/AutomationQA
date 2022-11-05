import { BasePage } from "./basePage"

export class CatalogPage extends BasePage {
    constructor() {
        super();
    };

    public getSectionButton() {
        return $('li[data-id="1"]');
    }
};

export const catalogPage = new CatalogPage();
