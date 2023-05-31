/// <reference types="Cypress" />

const el = require ('./elements').ELEMENTS

class homePage {
    acessarCadastro(){
        cy.visit('https://buger-eats.vercel.app/')
        cy.get(el.btnCadastro).click()
    }
}

export default new homePage ();