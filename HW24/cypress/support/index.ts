/// <reference types="cypress" />

import './commands';
import '@shelex/cypress-allure-plugin';

declare global {
    namespace Cypress {
        interface Chainable {
            getElementById(idValue: string): Cypress.Chainable<JQuery<HTMLElement>>;
        }
    }
}
