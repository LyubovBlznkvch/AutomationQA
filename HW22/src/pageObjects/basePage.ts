export class BasePage {
    get pageTitle() {
        return browser.getTitle();
    };

    get currentUrl() {
        return browser.getUrl();
    };

    public isElementDisplayed(locatorString: string) {
        return $(locatorString).isDisplayed();
    };
};
