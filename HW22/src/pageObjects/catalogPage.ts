import { logger } from "../support/logger";
import { BasePage } from "./basePage";
import { PAGES } from "../support/types";

export class CatalogPage extends BasePage {
    constructor() {
        super();
    }

    public getSectionButton() {
        logger.info(`Getting section button on ${PAGES.CATALOG} page...`);
        return $('//span[text() = "Onlíner Prime"]');
    }
}

export const catalogPage = new CatalogPage();
