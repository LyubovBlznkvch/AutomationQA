import { expect } from "chai";
import { Context } from "mocha";
import { Builder, ThenableWebDriver } from "selenium-webdriver";
import { writeFile, rmSync, mkdirSync } from "fs";
import { SearchingPage } from "../pageObject/searchingPage";
import { LANGUAGE, PAGES, SELECTOR_TYPES } from "../utils/types";
import { ApplicationPage } from "../pageObject/applicationPage";
import { AdminprocPage } from "../pageObject/adminprocPage";
import { EnglishHomePage } from "../pageObject/englishHomePage";
import { PageFactory } from "../pageObject/pageFactory";

const driver: ThenableWebDriver = new Builder()
.forBrowser("chrome")
.build();

const screensDir = "HW21/screenshots";
let testsCounter = 1;

const homePage = PageFactory.getPage(driver, PAGES.HOME);
const applicationPage = PageFactory.getPage(driver, PAGES.APPLICATION) as ApplicationPage;
const adminprocPage = PageFactory.getPage(driver, PAGES.ADMINPOC) as AdminprocPage;
const searchingPage = PageFactory.getPage(driver, PAGES.SEARCHING) as SearchingPage;
const englishHomePage = PageFactory.getPage(driver, PAGES.ENGLISH) as EnglishHomePage;

describe("nbrb.by tests", () => {
    before (() => {
        rmSync(screensDir, { recursive: true, force: true});
        mkdirSync(screensDir, { recursive: true });
    });

    it( "Should display page title correctly", async function () {
        await homePage.visitPage();
        await homePage.maximizeWindow();
        await homePage.clickOnApplicationsButton();
        await applicationPage.waitForPageTitle();
    });

    it( "Should redirect to correct URL", async function () {
        await homePage.visitPage();
        await homePage.clickOnAdminProcButton();
        await adminprocPage.waitForTargetUrl();
    });

    it( "Should redirect a user to the page that corresponds the search", async function () {
        await homePage.searchFor("");
        await searchingPage.waitForTargetUrl();
        const isDisplayed = await searchingPage.isDisplayedElementEnabled(SELECTOR_TYPES.CLASS_NAME, "form-with-frame form-multiple");
        expect(isDisplayed).to.be.true;
    });

    it (`Buttons in searching form should be enabled`, async function () {
       expect(await searchingPage.isDisplayedElementEnabled(SELECTOR_TYPES.XPATH, `//a[text()='Законодательство']`)).to.be.true;
    })

    it( "Should corretly switch to english", async function () {
        await homePage.visitPage();
        await homePage.switchPageLanguage(LANGUAGE.RU);
        await homePage.switchPageLanguage(LANGUAGE.EN);
        await englishHomePage.waitForTargetUrl();
        const headerText = await englishHomePage.getHeaderElement();
        expect(headerText).to.be.equal("News and Press Releases");
    });

    it( "Should highlight the block of information as selected", async function () {
        await homePage.visitPage();
        const infoBlock = await homePage.getStatisticsElement();
        await infoBlock.click();
        expect(await infoBlock.getAttribute("tabindex")).to.be.equal("-1");
    })

    after(async () => {
        await homePage.quitBrowser();
    });


afterEach(async function () {
   const data = await driver.takeScreenshot();
   const base64Data = data.replace(/^data:image\/png;base64,/, "");
   writeFile(`${screensDir}/${testsCounter++}. ${(this as Context).currentTest?.title}.png`, base64Data, 'base64', function (err) {
    if (err) console.log(err.message);
   });
    
});
});
 