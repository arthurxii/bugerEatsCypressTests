/// <reference types="Cypress" />

Cypress.Commands.add('acessarCadastro', () => {
    cy.visit('https://buger-eats.vercel.app/')

    cy.get('#page-home > div > main > a').click()
})