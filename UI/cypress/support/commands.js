Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});


Cypress.Commands.add('addProdutos', (produto, tamanho, cor, quantidade,) => {
    cy.get('[class="product-block grid"]').contains(produto).click({ force: true })
    cy.get('.button-variable-item-' + tamanho).click({ force: true })
    cy.get('.button-variable-item-' + cor).click()
    cy.get('.button-variable-item-' + tamanho).click({ force: true })
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    //cy.get('.woocommerce-message', { timeout: 10000 }).contains(new RegExp(`${quantidade} x "${produto}" foram adicionados no seu carrinho.`))

    cy.get('.woocommerce-message').should('contain',/**/"foram adicionados no seu carrinho")
    cy.get('#primary-menu > .menu-item-629 > a').click({ force: true })
});


Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)
    cy.get('#reg_password').type(senha)
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)
    cy.get('#account_last_name').type(sobrenome)
    cy.get('.woocommerce-Button').click()

})