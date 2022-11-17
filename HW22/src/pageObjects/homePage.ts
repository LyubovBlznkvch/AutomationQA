import { logger } from "../support/logger";
import { PAGES } from "../support/types";
import { BasePage } from "./basePage";
export class HomePage extends BasePage {
    constructor() {
        super();
    }

  public getOnlinerButtons() {
    logger.info(`Getting navigation bar buttons on ${PAGES.HOME} page...`);
    return $$('.b-main-navigation__text');
  }

  public getSearchBar() {
    logger.info(`Getting navigation bar buttons on ${PAGES.HOME} page...`);
    return $('.fast-search__input')
  }

  public getSignInButton() {
    logger.info(`Getting sign in button on ${PAGES.HOME} page...`);
    return $('//div[text() = "Вход"]')
  }

  public getSignInForm() {
    logger.info(`Getting sign in form on ${PAGES.HOME} page...`);
   return $('.auth-form__title');
  }

  public getLoginInput() {
    logger.info(`Getting login input field on ${PAGES.HOME} page...`);
    return $('//input[@placeholder="Ник или e-mail"]');
  }
 
  public getPasswordInput() {
    logger.info(`Getting password input field on ${PAGES.HOME} page...`);
    return $('//input[@placeholder="Пароль"]');
  }
  
  public getSubmitButton() {
    logger.info(`Getting submit button on ${PAGES.HOME} page...`);
    return $('//div[@class="auth-form__control auth-form__control_condensed-additional"]/button[@type="submit"]');
  }

  public async performSignIn(login: string, password: string) {
    logger.info(`Filling login and email fields with "${login}" and "${password}" values on ${PAGES.HOME} page...`);
    await (await this.getLoginInput()).setValue(login);
    await (await this.getPasswordInput()).setValue(password);
    logger.info(`Clicking on submit button on ${PAGES.HOME} page...`);
    await (await this.getSubmitButton()).click();
  }
}

export const homePage = new HomePage();
