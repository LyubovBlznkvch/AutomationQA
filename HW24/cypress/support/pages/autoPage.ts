import { BasePage } from "./basePage";

export class AutoPage extends BasePage {
    constructor() {
        super();

        this.url = "https://ab.onliner.by/"
    }
 public clickOnAdButton() {
    return cy.get('.project-navigation__button')
    .contains('Разместить объявление')
    .click()
 }
}