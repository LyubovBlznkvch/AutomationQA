import { expect } from "chai";
import { Context } from "mocha";
import { Builder, By, until, ThenableWebDriver } from "selenium-webdriver";
import { writeFile, rmSync, mkdirSync } from "fs";
import { baseURL, NBRB, defaultWaitingTime } from "./constants";

const driver: ThenableWebDriver = new Builder()
.forBrowser("chrome")
.build();

const screensDir = "HW19/screenshots";
let testsCounter = 1;


describe("nbrb.by tests", () => {
    before (() => {
        rmSync(screensDir, { recursive: true, force: true});
        mkdirSync(screensDir, { recursive: true });
    });

    it( "Should display page title correctly", async function () {
        await driver.manage().window().maximize();
        await driver.get(baseURL);
        await driver.findElement(By.className("hide-1024")).click();
        const title = await driver.getTitle();
        expect(title).to.be.equal(`Электронные обращения | ${NBRB}`);
    });

    it( "Should redirect to target URL", async function () {
        await driver.get(baseURL);
        const followingURL = "today/adminproc"
        const administrativeProcedures = await driver.findElement(By.css("li a[href='today/adminproc']"));
        await administrativeProcedures.click();
        await driver.wait(until.urlIs(`${baseURL}${followingURL}`));
 
    });

    it( "Should redirect a user to the page that corresponds the search", async function () {
        const searchBar = await driver.findElement(By.className("search__input"));
        const searchButton = await driver.findElement(By.className("search__submit"));
        await driver.actions()
        .click(searchBar)
        .sendKeys('Курсы валют')
        .click(searchButton)
        .perform();
        await driver.wait(until.titleContains(`Поиск по сайту | ${NBRB}`), defaultWaitingTime);
        const searchForm = await driver.findElement(By.className('form-with-frame form-multiple'));
        let isDisplayed =  await searchForm.isDisplayed();
        expect(isDisplayed).to.be.true;
    });

    it( "Should corretly switch to english", async function () {
        await driver.findElement(By.xpath("//ul//li/a[text()='RU']")).click();
        await driver.wait(until.elementLocated(By.xpath("//ul//li/a[text()='EN']")), defaultWaitingTime).click();
        await driver.wait(until.urlIs(`${baseURL}engl`))
        const headerText = await driver.findElement(By.css(".section__header")).getText();
        expect(headerText).to.be.equal("News and Press Releases");
    });

    it( "Should highlight the block of information as selected", async function () {
        await driver.get(baseURL);
        const infoBlock = await driver.findElement(By.css("li a[href='#mm-56']"))
        await infoBlock.click();
        expect(await infoBlock.getAttribute("tabindex")).to.be.equal("-1");
    })


    after(async () => {
        await driver.quit();
    });


afterEach(async function () {
   const data = await driver.takeScreenshot();
   const base64Data = data.replace(/^data:image\/png;base64,/, "");
   writeFile(`${screensDir}/${testsCounter++}. ${(this as Context).currentTest?.title}.png`, base64Data, 'base64', function (err) {
    if (err) console.log(err.message);
   });
    
});
});
 