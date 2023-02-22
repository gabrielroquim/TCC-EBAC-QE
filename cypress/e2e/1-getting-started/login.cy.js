///<reference types="cypress" />

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

  it('Login usando fixture', () => {
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.username, dados.password)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', ' gabsqa-1779')
  });
})