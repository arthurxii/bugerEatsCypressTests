/// <reference types="Cypress" />

import cadastro from '../support/pages/Cadastro'
import homePage from '../support/pages/Home'

describe('Validar o cadastro na plataforma', () => {
    beforeEach(() => {
        homePage.acessarCadastro()
        cy.reload()
    })

    it('deve realizar o cadastro', () => {
        cadastro.validarCadastro()
      })
})

describe('Validar com dados invalidos', () => {
    beforeEach(() => {
        homePage.acessarCadastro()
        cy.reload()
    })

    it('não deve realizar o cadastro sem a CNH', () => {
        cadastro.validarCadastroSemCNH()
      })

    it('não deve realizar o cadastro com dados inválidos', () => {
        cadastro.validarCadastroComDadosIncorretos()
    })
})