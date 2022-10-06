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
        await homePage.maxmizeWindow();
        await homePage.clickOnNavigationItemByLocator(SELECTOR_TYPES.CLASS_NAME, "hide-1024");
        await applicationPage.waitForTitleIs();
    });

    it( "Should redirect to correct URL", async function () {
        await homePage.visitPage();
        await homePage.clickOnNavigationItemByLocator(SELECTOR_TYPES.CSS, "li a[href='today/adminproc']");
        await adminprocPage.getTargetUrl();
    });

    it( "Should redirect a user to the page that corresponds the search", async function () {
        await homePage.searchFor("");
        await searchingPage.isTitleContains();
        const searchForm = await searchingPage.getNavigationItemByLocator(SELECTOR_TYPES.CLASS_NAME, "form-with-frame form-multiple");
        let isDisplayed =  await searchForm.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it ("The button 'Законодательство' should be enabled", async function () {
       expect(await searchingPage.isDisplayedElementEnabled(SELECTOR_TYPES.XPATH, "//a[text()='Законодательство']")).to.be.true;
    })

    it( "Should corretly switch to english", async function () {
        await homePage.visitPage();
        await homePage.pageLanguageRU();
        await homePage.pageLanguageEN();
       // await homePage.pageLanguage(LANGUAGE.RU);
       // await homePage.pageLanguage(LANGUAGE.EN);
        await englishHomePage.getTargetUrl();
        const headerText = await englishHomePage.textGetter(SELECTOR_TYPES.CSS, ".section__header");
        expect(headerText).to.be.equal("News and Press Releases");
    });

    it( "Should highlight the block of information as selected", async function () {
        await homePage.visitPage();
        const infoBlock = await homePage.getNavigationItemByLocator(SELECTOR_TYPES.CSS, "li a[href='#mm-56']");
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
 