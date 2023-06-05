/// <reference types="Cypress" />

const el = require ('./elements').ELEMENTS
import 'cypress-file-upload';
const faker = require ('faker');

const nomeCompleto = faker.name.findName()
const cpf = faker.random.number({ min: 10000000000, max: 99999999999 }).toString()
const email = faker.internet.email()
const telefone = faker.phone.phoneNumber()
const cep = faker.address.zipCode()
const numero = faker.random.number({ min: 1, max: 9999 }).toString()
const complemento = faker.address.secondaryAddress()

class Cadastro {
    validarCadastro(){
        // preencher o cadastro
        cy.get(el.iptNomeCompleto)
            .type(nomeCompleto)
            .should('have.value', nomeCompleto)
        cy.get(el.iptCPF)
            .type(cpf)
            .should('have.value', cpf)
        cy.get(el.iptEmail)
            .type(email)
            .should('have.value', email)
        cy.get(el.iptWhatsapp)
            .type(telefone)
            .should('have.value', telefone)
        cy.get(el.iptCEP)
            .type(cep)
            .should('have.value', cep)
        cy.get(el.btnBuscarCEP).click()
        cy.get(el.iptNumero)
            .type(numero)
            .should('have.value', numero)
        cy.get(el.iptComplemento)
            .type(complemento)
            .should('have.value', complemento)
        cy.get(el.btnEntregaMoto).click()
        cy.fixture('example.jpg', 'binary').then(fileContent => {
            cy.get(el.btnFotoCNH).attachFile ({
                fileContent: fileContent,
                fileName: 'example.jpg',
                mimeType: 'image/jpg'
            })
        })
        cy.get(el.labelImgCNH).should('be.visible')

        // finalizar o cadastro
        cy.get(el.btnFinalizarCadastro).click()
        cy.get(el.labelConfirmacaoCadastrado).should('be.visible')
        cy.get(el.btnFechar).click()
        cy.get(el.labelSejaParceiro).should('be.visible')
    }

    validarCadastroSemCNH(){
        // preencher o cadastro
        cy.get(el.iptNomeCompleto)
            .type(nomeCompleto)
            .should('have.value', nomeCompleto)
        cy.get(el.iptCPF)
            .type(cpf)
            .should('have.value', cpf)
        cy.get(el.iptEmail)
            .type(email)
            .should('have.value', email)
        cy.get(el.iptWhatsapp)
            .type(telefone)
            .should('have.value', telefone)
        cy.get(el.iptCEP)
            .type(cep)
            .should('have.value', cep)
        cy.get(el.btnBuscarCEP).click()
        cy.get(el.iptNumero)
            .type(numero)
            .should('have.value', numero)
        cy.get(el.iptComplemento)
            .type(complemento)
            .should('have.value', complemento)
        cy.get(el.btnEntregaMoto).click()

        //validar o cadastro sem a CNH
        cy.get(el.btnFinalizarCadastro).click()
        cy.get(el.labelAlertaErroCNH).should('be.visible')
    }

    validarCadastroComDadosIncorretos(){
        // preencher o cadastro
        cy.get(el.iptNomeCompleto)
            .type(nomeCompleto)
            .should('have.value', nomeCompleto)
        cy.get(el.iptCPF)
            .type('36134723762856465')
            .should('have.value', '36134723762856465')
        cy.get(el.iptEmail)
            .type(email)
            .should('have.value', email)
        cy.get(el.iptWhatsapp)
            .type(telefone)
            .should('have.value', telefone)
        cy.get(el.iptCEP)
            .type('01310904')
            .should('have.value', '01310904')
        cy.get(el.btnBuscarCEP).click()
        cy.get(el.iptNumero)
            .type(numero)
            .should('have.value', numero)
        cy.get(el.iptComplemento)
            .type(complemento)
            .should('have.value', complemento)
        cy.get(el.btnEntregaMoto).click()
        cy.fixture('example.jpg', 'binary').then(fileContent => {
            cy.get(el.btnFotoCNH).attachFile ({
                fileContent: fileContent,
                fileName: 'example.jpg',
                mimeType: 'image/jpg'
            })
        })
        cy.get(el.labelImgCNH).should('be.visible')

        // validar o cadastro com cpf invalido
        cy.get(el.btnFinalizarCadastro).click()
        cy.get(el.labelCPFInvalido).should('be.visible')
    }

}

export default new Cadastro();