/// <reference types="cypress" />

Cypress.Commands.add('getElementById', (idValue: string) => {
    return cy.get(`#${idValue}`);
})
