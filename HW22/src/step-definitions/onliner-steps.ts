import { Given, Then, When } from "@wdio/cucumber-framework";
import { validLogin } from "../support/constants";
import { homePage } from "../pageObjects/homePage";
import { catalogPage } from "../pageObjects/catalogPage";
import { generateAlphabeticString } from "../support/helpers";

Given(/^the User opens web page (.+)$/, async (url) => {
    await browser.url(url);
});

When(/^the User clicks on section button$/, async () => {
    const sectionButton = await catalogPage.getSectionButton();
    await sectionButton.waitForClickable();
    await sectionButton.click();
});

Then(/^the User sees the section is selected$/, async () => {
    await catalogPage.waitForElementDisplayed('//div[text() = "Книги"]');
});

Then(/^the User sees (.+) as the page title$/, async (pageTitle) => {
    await browser.waitUntil(async () => {
    return await catalogPage.pageTitle === pageTitle;
 });
});

Then(/^the User sees that the text of button (.+) contains (.+)$/, async (buttonIndex, buttonText) => {
    const onlinerButtons = await homePage.getOnlinerButtons();
    await expect(onlinerButtons[buttonIndex - 1]).toHaveText(buttonText);
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


When(/^the User signs in with valid login and invalid password of (.+) symbols$/, async (passwordLength) => {
    await (await homePage.getSignInForm()).waitForExist();
    const invalidPassword = generateAlphabeticString(passwordLength);
    await homePage.performSignIn(validLogin, invalidPassword);
});

Then(/^the User sees the captcha window$/, async () => {
    await catalogPage.waitForElementDisplayed('//div[text() = "Помогите нам улучшить безопасность"]');
});
