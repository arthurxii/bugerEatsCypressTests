const el = require ('./elements').ELEMENTS
import 'cypress-file-upload';

class Cadastro {
    validarCadastro(){
        // preencher o cadastro
        cy.get(el.iptNomeCompleto).type('Arthur Henrique')
        cy.get(el.iptCPF).type('36134723762')
        cy.get(el.iptEmail).type('email@teste.com')
        cy.get(el.iptWhatsapp).type('988774422')
        cy.get(el.iptCEP).type('01310904')
        cy.get(el.btnBuscarCEP).click()
        cy.get(el.iptNumero).type('10')
        cy.get(el.iptComplemento).type('teste')
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
        cy.get(el.iptNomeCompleto).type('Arthur Henrique')
        cy.get(el.iptCPF).type('36134723762')
        cy.get(el.iptEmail).type('email@teste.com')
        cy.get(el.iptWhatsapp).type('988774422')
        cy.get(el.iptCEP).type('01310904')
        cy.get(el.btnBuscarCEP).click()
        cy.get(el.iptNumero).type('10')
        cy.get(el.iptComplemento).type('teste')
        cy.get(el.btnEntregaMoto).click()

        //validar o cadastro sem a CNH
        cy.get(el.btnFinalizarCadastro).click()
        cy.get(el.labelAlertaErroCNH).should('be.visible')
    }

    validarCadastroComDadosIncorretos(){
        // preencher o cadastro
        cy.get(el.iptNomeCompleto).type('Arthur Henrique')
        cy.get(el.iptCPF).type('36134723762856465')
        cy.get(el.iptEmail).type('email@teste.com')
        cy.get(el.iptWhatsapp).type('988774422')
        cy.get(el.iptCEP).type('01310904')
        cy.get(el.btnBuscarCEP).click()
        cy.get(el.iptNumero).type('10')
        cy.get(el.iptComplemento).type('teste')
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