require('@shelex/cypress-allure-plugin');
var faker = require('faker-br');
const { perfil } = require('../fixtures/perfil.json');

let dadosLogin;

describe('Cadastrar Endereços de Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta');
        cy.fixture('perfil').then((perfil) => {
            dadosLogin = perfil;
            cy.login(dadosLogin.username, dadosLogin.password);
        });
        cy.get('.woocommerce-MyAccount-content').should('contain', 'Olá');
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('Deve cadastrar Endereço de Faturamento', () => {
        cy.get(':nth-child(3) > [href="http://lojaebac.ebaconline.art.br/minha-conta/edit-address/"]').click();
        cy.get('h2').should('contain', 'My Addresses');
        cy.get('.myaccount_address').should('contain', 'The following addresses will be used on the checkout page by default.')
        cy.get(':nth-child(1) > .title > h3').should('contain', 'Billing Address');
        cy.get(':nth-child(1) > .title > .edit').should('exist').click();
        cy.get('#billing_first_name').clear().type(faker.name.firstName());
        cy.get('#billing_last_name').clear().type(faker.name.lastName());
        cy.get('#billing_company').clear().type(faker.company.companyName());
        cy.get('#billing_address_1').clear().type(faker.address.streetName());
        cy.get('#billing_address_2').clear().type(faker.random.number());
        cy.get('#billing_city').clear().type(faker.address.city());
        cy.get('#billing_postcode').clear().type(faker.address.zipCodeValid());
        cy.get('#billing_phone').clear().type(faker.phone.phoneNumber());
        cy.get('button[name="save_address"]').should('have.attr', 'value', 'Salvar endereços').click();
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso');
    });

    it('Deve cadastrar Endereço  de Entrega', () => {
        cy.get(':nth-child(3) > [href="http://lojaebac.ebaconline.art.br/minha-conta/edit-address/"]').click();
        cy.get('h2').should('contain', 'My Addresses');
        cy.get(':nth-child(2) > .title > h3').should('contain', 'Shipping Address'); 
        cy.get(':nth-child(2) > .title > .edit').should('exist').click();
        cy.get('#shipping_first_name').clear().type(faker.name.firstName());
        cy.get('#shipping_last_name').clear().type(faker.name.lastName());
        cy.get('#shipping_company').clear().type(faker.company.companyName());
        cy.get('#shipping_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow > b').click();
        cy.get('.select2-results__option').contains('Brasil').click();
        cy.get('#shipping_city').type(faker.address.city())
        cy.get('#shipping_state_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click();
        cy.get('.select2-search__field').type('São Paulo');
        cy.get('.select2-results__option').contains('São Paulo').click();
        cy.get('#shipping_address_1').clear().type(faker.address.streetName());
        cy.get('#shipping_address_2').clear().type(faker.random.number());      
        cy.get('#shipping_postcode').clear().type(faker.address.zipCodeValid());      
        cy.get('button[name="save_address"]').should('have.attr', 'value', 'Salvar endereços').click();
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso');

    })
})