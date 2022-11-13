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

public async switchToFrame() {
  const frame = await $("iframe[src='https://www.google.com/recaptcha/api2/anchor?ar=2&k=6Ld-7qgZAAAAAD46rcYUMrB1c-m4ipuoXuhPyCgc&co=aHR0cHM6Ly93d3cub25saW5lci5ieTo0NDM.&hl=ru&v=jF-AgDWy8ih0GfLx4Semh9UK&size=normal&cb=mwo0dn80prl4']");
  await frame.isDisplayed();
  await browser.switchToFrame($(frame));
  };

public getCheckBox() {
  return $('.recaptcha-checkbox');
};

public async clickOnCheckBox() {
  await (await this.getCheckBox()).click(); 
};

};

export const homePage = new HomePage();
