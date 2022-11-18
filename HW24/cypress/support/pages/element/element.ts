import { NAVIGATION_ITEMS } from "../../types/types";

export class NavigationBar {
    constructor() {}

    public getNavigationItemByInnerText(itemText: NAVIGATION_ITEMS) {
        return cy.get(".b-main-navigation__text").contains(itemText);
    }
    public clickNavigationItemByInnerText(itemText: NAVIGATION_ITEMS) {
        this.getNavigationItemByInnerText(itemText).click();
    }
    public getSignInButton() {
        return cy.get(".auth-bar__item").first();
    }
    public clickOnSignInButton() {
        this.getSignInButton().click();
    }
    public getLoginInput() {
        return cy.get('input[placeholder="Ник или e-mail"]');
    }
    public getPasswordInput() {
        return cy.get('input[placeholder="Пароль"]');
    }
    public getSubmitButton() {
        return cy.get('button').contains('Войти');
    }
    public performSignIn(login: string, password: string) {
        this.getLoginInput().type(login);
        this.getPasswordInput().type(password);
        this.getSubmitButton().click();
    }
    public getCaptchaWindow() {
       return cy.getElementById("auth-container").first();
    }
    public getSignInForm() {
        return cy.get('.auth-form__title').contains('Вход');
    }

}