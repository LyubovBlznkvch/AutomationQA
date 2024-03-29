import { Locator, WebDriver, By, until } from "selenium-webdriver";
import { SELECTOR_TYPES } from "./types";

export class DriverUtils {
    constructor(public driver: WebDriver) {}

    public async findElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        const locator: Locator = By[selectorType](locatorString);
        await this.driver.wait(until.elementLocated(locator));
        return await this.driver.findElement(locator);
    };

    public async getTextOfElement(selectorType: SELECTOR_TYPES, locatorString: string) {
        return await (await this.findElement(selectorType, locatorString)).getText();
    };

};
 