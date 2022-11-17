import { CatalogPage } from "../support/pages/catalogPage";
import { PageFactory } from "../support/pages/pageFactory";
import { HomePage } from "../support/pages/homePage";
import { NAVIGATION_ITEMS, PAGES } from "../support/types/types";
import { AutoPage } from "../support/pages/autoPage";
import { expect } from "chai";
import { generateAlphabeticString } from "../support/helpers/helper";
import { validLogin } from "../support/constants/constants";

const homePage = PageFactory.getPage(PAGES.HOME) as HomePage;
const catalogPage = PageFactory.getPage(PAGES.CATALOG) as CatalogPage;
const autoPage = PageFactory.getPage(PAGES.AUTO) as AutoPage;

describe("Onliner.by tests", () => {
    before(() => {
        homePage.visitPage();
    });

    it("Should display page title correctly", () => {
        homePage.navigationBar.clickNavigationItemByInnerText(NAVIGATION_ITEMS.CATALOG);
        cy.intercept("GET", "https://catalog.onliner.by/sdapi/pogoda/api/now").as("now");
        cy.wait("@now").then(data => {
            expect(data.response?.statusCode).to.equal(200);
        })
        catalogPage.waitForTitleIncludeText("Каталог Onlíner");
    });

    it("Should select the section correctly", () => {
        homePage.navigationBar.clickNavigationItemByInnerText(NAVIGATION_ITEMS.CATALOG);
        catalogPage.clickOnSectionButton();
        catalogPage.getElementOfSelectedSection().should('be.visible');
    });


    it("Should redirect to correct URL", () => {
        homePage.navigationBar.clickNavigationItemByInnerText(NAVIGATION_ITEMS.AUTOBARAKHOLKA);
        autoPage.getCurrentUrl().should('eq','https://ab.onliner.by/');
    })

    it("Should redirect to sign-in form", () => {
        homePage.navigationBar.clickNavigationItemByInnerText(NAVIGATION_ITEMS.AUTOBARAKHOLKA);
        autoPage.clickOnAdButton();
        autoPage.navigationBar.getSignInForm().should('be.visible');
    });

    it("Should display captcha window", () => {
        catalogPage.visitPage()
        homePage.navigationBar.clickOnSignInButton();
        homePage.navigationBar.getSignInForm().should('be.visible');
        const invalidPassword = generateAlphabeticString(10);
        homePage.navigationBar.performSignIn(validLogin, invalidPassword);
        homePage.navigationBar.getCaptchaWindow().should('be.visible');
    });

    

});