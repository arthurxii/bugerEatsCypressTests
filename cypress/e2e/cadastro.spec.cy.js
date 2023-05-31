/// <reference types="Cypress" />

import cadastro from '../support/pages/Cadastro'
import homePage from '../support/pages/Home'

describe('Validar o cadastro na plataforma', () => {
    beforeEach(() => {
        homePage.acessarCadastro()
    })

    it('deve realizar o cadastro', () => {
        cadastro.validarCadastro()
      })
})

describe('Validar o cadastro sem a CNH', () => {
    beforeEach(() => {
        homePage.acessarCadastro()
    })

    it('não deve realizar o cadastro sem a CNH', () => {
        cadastro.validarCadastroSemCNH()
      })
})

describe('Validar o cadastro com dados inválidos', () => {
    beforeEach(() => {
        homePage.acessarCadastro()
    })

    it('não deve realizar o cadastro com dados inválidos', () => {
        cadastro.validarCadastroComDadosIncorretos()
      })
})