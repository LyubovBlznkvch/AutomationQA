import { test, expect } from "@playwright/test";
import { ApplicationPage} from '../src/applicationPage';
import { AdminprocPage } from "../src/adminprocPage";
import { PageFactory} from '../src/pageFactory';
import { LANGUAGE, PAGES } from "../utils/types";
import { EnglishHomePage } from "../src/englishHomePage";
import { SearchingPage } from "../src/searchingPage";
import { HomePage } from "../src/homePage";

let homePage: HomePage;
let adminprocPage: AdminprocPage;
let applicationPage: ApplicationPage;
let englishHomePage: EnglishHomePage;
let searchingPage: SearchingPage;

test.describe('nbrb.by tests', async () => {
    test.beforeEach(async ({ page }) => {
        homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage;
        adminprocPage = PageFactory.getPage(page, PAGES.ADMINPOC) as AdminprocPage;
        applicationPage = PageFactory.getPage(page, PAGES.APPLICATION) as ApplicationPage;
        englishHomePage = PageFactory.getPage(page, PAGES.ENGLISH) as EnglishHomePage;
        searchingPage = PageFactory.getPage(page, PAGES.SEARCHING) as SearchingPage;
        await homePage.visitPage();
    });


test("Should highlight the block of information as selected", async () => {
    const infoBlock = await homePage.getStatisticsElement();
    await infoBlock.click();
    expect(await infoBlock.getAttribute("tabindex")).toEqual("-1");
});

test("Should display page title correctly", async () => {
    await homePage.clickOnApplicationsButton();
    await applicationPage.waitForPageTitle();
});

test("Should redirect to correct URL", async () => {
    await homePage.clickOnAdminProcButton();
    await adminprocPage.waitForTargetUrl();
});

test("Should corretly switch to english", async () => {
    await homePage.switchPageLanguage(LANGUAGE.RU);
    await homePage.switchPageLanguage(LANGUAGE.EN);
    const headerText = await englishHomePage.getHeaderElementText();
    expect(headerText).toEqual("News and Press Releases");

});

test.only("Should redirect a user to the page that corresponds the search", async () => {
    await homePage.searchFor('');
    const isVisible = searchingPage.isElementVisible();
    expect(isVisible).toBeTruthy();
});
});
