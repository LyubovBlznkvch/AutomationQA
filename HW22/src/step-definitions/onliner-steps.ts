import { Given, Then, When} from "@wdio/cucumber-framework";
import { validLogin } from "../support/constants";
import { homePage } from "../pageObjects/homePage";
import { catalogPage } from "../pageObjects/catalogPage";
import { generateAlphabeticString } from "../support/helpers";

Given(/^the User opens web page (.+)$/, async (url) => {
    await browser.url(url);
});

Then(/^the User sees that the button (.+) contains (.+)$/, async (buttonName, buttonText) => {
    const onlinerButtons = await homePage.getOnlinerButtons();
    expect(onlinerButtons[buttonName]).toHaveText(buttonText);
});

When(/^the User clicks on sign-in button$/, async () => {
    const signInButton = await homePage.getSignInButton();
    await signInButton.waitForClickable();
    await signInButton.click();
});

Then(/^the User sees opened sign-in form$/, async () => {
    const signInForm = await homePage.getSignInForm();
    await signInForm.waitForDisplayed();
});


When(/^the User sign in with valid login and invalid password of (.+) symbols$/, async (length) => {
    await (await homePage.getSignInForm()).waitForExist();
    const invalidPassword  = generateAlphabeticString(length);
    await homePage.performSignIn(validLogin, invalidPassword);
});

Then(/^the User sees password error massage$/, async () => {
    const passwordErrorMassage = await homePage.getErrorMassage();
    passwordErrorMassage.waitForDisplayed();
    expect(passwordErrorMassage.getText()).toStrictEqual("Неверный логин или пароль");
});


When(/^the User clicks on catalog button$/, async () => {
    const catalogButton = await homePage.getCatalogButton();
    await catalogButton.waitForClickable();
    await catalogButton.click();
});

Then(/^the User sees (.+) as the page title$/, async (pageTitle) => {
       await browser.waitUntil(async () => {
       return await catalogPage.getPageTitle === pageTitle;
    });

When(/^the User click on section name$/, async () => {
    const sectionButton = await catalogPage.getSectionButton();
    await sectionButton.waitForClickable();
    await sectionButton.click();
});

Then(/^the User sees the section is selected$/, async () => {
   const sectionButton = await catalogPage.getSectionButton();
   const classAtribute = await sectionButton.getAttribute('class');
   expect(classAtribute).toStrictEqual("catalog-navigation-classifier__item catalog-navigation-classifier__item_active");
});

});



