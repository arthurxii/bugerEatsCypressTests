/// <reference types="Cypress" />

import homePage from '../support/pages/Home'

describe('Clicar para fazer cadastro', () => {
    beforeEach(() => {
      cy.reload()
    })

    it('deve clicar no botao cadastro', () => {
        homePage.acessarCadastro()
      })
})