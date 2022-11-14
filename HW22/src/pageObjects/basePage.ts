export class BasePage {
    get pageTitle() {
        return browser.getTitle();
    }

    get currentUrl() {
        return browser.getUrl();
    }

    public async waitForElementDisplayed(locatorString: string) {
        await $(locatorString).waitForDisplayed();
    }
}
