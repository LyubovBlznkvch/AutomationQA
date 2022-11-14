import { test, expect } from "@playwright/test";
import { ApplicationPage} from '../src/applicationPage';
import { AdminprocPage } from "../src/adminprocPage";
import { PageFactory} from '../src/pageFactory';
import { LANGUAGE, PAGES } from "../utils/types";
import { EnglishHomePage } from "../src/englishHomePage";
import { SearchingPage } from "../src/searchingPage";


test.describe('nbrb.by tests', async () => {
test("Should highlight the block of information as selected", async ({ page }) => {
    const HomePage = PageFactory.getPage(page, PAGES.HOME);
    await HomePage.visitPage();
    const infoBlock = await HomePage.getStatisticsElement();
    await infoBlock.click();
    expect(await infoBlock.getAttribute("tabindex")).toEqual("-1");
});

test("Should display page title correctly", async ({ page }) => {
    const HomePage = PageFactory.getPage(page, PAGES.HOME);
    const ApplicationPage = PageFactory.getPage(page, PAGES.APPLICATION) as ApplicationPage;
    await HomePage.visitPage();
    await HomePage.clickOnApplicationsButton();
    await ApplicationPage.waitForPageTitle();
});

test("Should redirect to correct URL", async ({ page }) => {
    const HomePage = PageFactory.getPage(page, PAGES.HOME);
    const AdminprocPage = PageFactory.getPage(page, PAGES.ADMINPOC) as AdminprocPage;
    await HomePage.visitPage();
    await HomePage.clickOnAdminProcButton();
    await AdminprocPage.waitForTargetUrl();
});

test("Should corretly switch to english", async ({ page }) => {
    const HomePage = PageFactory.getPage(page, PAGES.HOME);
    const EnglishHomePage = PageFactory.getPage(page, PAGES.ENGLISH) as EnglishHomePage;
    await HomePage.visitPage();
    await HomePage.switchPageLanguage(LANGUAGE.RU);
    await HomePage.switchPageLanguage(LANGUAGE.EN);
    const headerText = await EnglishHomePage.getHeaderElementText();
    expect(headerText).toEqual("News and Press Releases");

});

test("Should redirect a user to the page that corresponds the search", async ({page}) => {
    const HomePage = PageFactory.getPage(page, PAGES.HOME);
    const SearchingPage = PageFactory.getPage(page, PAGES.SEARCHING) as SearchingPage;
    await HomePage.visitPage();
    await HomePage.searchFor('');
    const isDisplayed = SearchingPage.isElementVisible();
    expect(isDisplayed).toBeTruthy();
});
});
