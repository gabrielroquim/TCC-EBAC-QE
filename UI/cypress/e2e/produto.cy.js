/// <reference types="cypress" />
let dadosLogin

context('Funcionalidade Login', () => {
  before(() => {
    cy.fixture('perfil').then(perfil => {
      dadosLogin = perfil
    })
  });

  beforeEach(() => {
    cy.visit('minha-conta')
  });

  afterEach(() => {
    cy.screenshot()
  })

  it('Login com sucesso', () => {
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.username, dados.password)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('#primary-menu > .menu-item-629 > a').click()
   //cy.addProdutos('Abominable Hoodie', '36', 'Blue', 1)
    cy.addProdutos('Abominable Hoodie', 'L', 'Blue', 2)
    cy.addProdutos('Abominable Hoodie', 'XS', 'Blue', 2)   
    cy.addProdutos('Abominable Hoodie', 'M', 'Green', 2)
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('[class="button checkout wc-forward"]').eq(1).click()
    

    cy.get('#payment_method_cheque').click()
    cy.get('.showcoupon').click()
    cy.get('#coupon_code').type("PalmeirasVerdesd")
    cy.get('.form-row-last > .button').click()
    cy.get('#terms').click({ force: true })
    cy.get('#place_order').click({ force: true })
    cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    cy.get('.woocommerce-order-details__title').should('contain', 'Detalhes do pedido')

  });


})