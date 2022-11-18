import { BasePage } from "./basePage";

export class CatalogPage extends BasePage {
    constructor() {
        super();

        this.url = "https://catalog.onliner.by/"
    }
 
    public getSectionButton() {
        return cy.get('.catalog-navigation-classifier__item-title-wrapper').contains("Onlíner Prime");
    }

    public clickOnSectionButton() {
        this.getSectionButton().click();
    }
    public getElementOfSelectedSection() {
        return cy.get('.catalog-navigation-list__aside-title').contains("Книги");
    }
}