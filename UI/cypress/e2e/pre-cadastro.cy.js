/// <reference types="cypress"/>

var faker = require('faker-br');

describe('Funcionalidade Pré- Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')

    });

    it('Deve Completar o pré-cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('12wws34.!#$abc')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });

    it.only('Deve completar o pré-cadastro com sucesso com comandos customizados', () => {
        let emailFaker3 = faker.internet.email()
        cy.preCadastro(emailFaker3, 'senha!@senha#', 'Fábio', 'Santana')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });
});
