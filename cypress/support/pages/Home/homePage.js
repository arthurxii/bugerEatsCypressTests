class homePage {
    acessarCadastro(){
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('#page-home > div > main > a').click()
    }

    preencherCadastro(){
      
    }
}

export default new homePage ();