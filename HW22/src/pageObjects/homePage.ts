import { BasePage } from "./basePage";
export class HomePage extends BasePage {
    constructor() {
        super();
    };

  public getOnlinerButtons() {
    return $$('.b-main-navigation__text');
  };

  public getSearchBar() {
    return $('.fast-search__input')
  };

  public getSignInButton() {
    return $('//div[text() = "Вход"]')
   };

  public getSignInForm() {
   return $('.auth-form__title');
  };

  public getLoginInput() {
    return $('//input[@placeholder="Ник или e-mail"]');
  };
 
  public getPasswordInput() {
    return $('//input[@placeholder="Пароль"]');
  };
  
  public getSubmitButton() {
    return $('//div[@class="auth-form__control auth-form__control_condensed-additional"]/button[@type="submit"]');
  };

  public getErrorMassage() {
    return $('//div[@class="auth-form__line auth-form__line_condensed"]/div[@class="auth-form__description auth-form__description_error auth-form__description_base auth-form__description_extended-other"]');
  };

  public async performSignIn (login: string, password: string) {
    await (await this.getLoginInput()).setValue(login);
    await (await this.getPasswordInput()).setValue(password);
    await (await this.getSubmitButton()).click(); 
};

};

export const homePage = new HomePage();
