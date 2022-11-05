import { BasePage } from "./basePage";
export class HomePage extends BasePage {
    constructor() {
        super();
    };

  public getOnlinerButtons() {
    return $$('.b-main-navigation__text');
  };

  public async getCatalogButton() {
     return $('//span[text() = "Каталог"]');
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
    return $('//input[placeholder="Ник или e-mail"]');
  };
 
  public getPasswordInput() {
    return $('//input[type="password"]');
  };
  
  public getSubmitButton() {
    return $('//button[type="submit"]');
  };

  public getErrorMassage() {
    return $('//div[text()="Неверный логин или пароль"]')
  };

  public async performSignIn (login: string, password: string) {
    await (await this.getLoginInput()).setValue(login);
    await (await this.getPasswordInput()).setValue(password);
    await (await this.getSubmitButton()).click(); 
};
};

export const homePage = new HomePage();
