import { test, expect } from "@playwright/test";
import { ApplicationPage} from '../src/applicationPage';
import { AdminProcPage } from '../src/adminProcPage'
import { PageFactory} from '../src/pageFactory';
import { LANGUAGES, PAGES } from "../utils/types";
import { EnglishHomePage } from "../src/englishHomePage";
import { SearchingPage } from "../src/searchingPage";
import { HomePage } from "../src/homePage";

let homePage: HomePage;
let adminProcPage: AdminProcPage;
let applicationPage: ApplicationPage;
let englishHomePage: EnglishHomePage;
let searchingPage: SearchingPage;

test.describe('nbrb.by tests', async () => {
    test.beforeEach(async ({ browser }) => {
        const page = await browser.newPage();
        homePage = PageFactory.getPage(page, PAGES.HOME) as HomePage;
        adminProcPage = PageFactory.getPage(page, PAGES.ADMIN_PROC) as AdminProcPage;
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
    await adminProcPage.waitForTargetUrl();
});

test("Should correctly switch to english", async () => {
    await homePage.switchPageLanguage(LANGUAGES.RU);
    await homePage.switchPageLanguage(LANGUAGES.EN);
    const headerText = await englishHomePage.getHeaderElementText();
    expect(headerText).toEqual("News and Press Releases");

});

test("Should redirect a user to the page that corresponds the search", async () => {
    await homePage.searchFor('');
    const isVisible = searchingPage.isSearchingFormVisible();
    expect(isVisible).toBeTruthy();
});
});
