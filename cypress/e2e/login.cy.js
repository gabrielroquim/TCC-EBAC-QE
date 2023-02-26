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

  it('Login com sucesso', () => {
    cy.fixture('perfil').then((dados) => {
    cy.login(dados.username, dados.password)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', ' gabsqa-1779')
  });

  it('Login sem preencher E-mail', () => {
    cy.get('#password').type('223233')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório.')  
  });

  it('Login com email inexistente', () => {
    cy.fixture('perfil').then((dados) => {
    cy.login(dados.username3)    
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail gabsqa@testesebac.com.qa está incorreta. Perdeu a senha?')
  });

  it('Login com email não preenchido', () => {
    cy.fixture('perfil').then((dados) => {
    cy.login(dados.password3)    
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-error > li').should('contain', 'Erro: a senha fornecida para o e-mail gabsqa@testesebac.com.qa está incorreta. Perdeu a senha?')
  });

})