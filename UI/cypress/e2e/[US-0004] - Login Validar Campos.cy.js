require('@shelex/cypress-allure-plugin');

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

  it('Login inválido - sem preencher E-mail', () => {
    cy.get('#password').type('223233')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório.')
  });

  it('Login inválido - com email não cadastrado', () => {
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.username3, dados.password)
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
  });

  it('Login inválido - sem preencher senha', () => {
    cy.fixture('perfil').then((dados) => {
      cy.login(dados.username, ' ')
    })
    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-error > li').should('contain', 'Erro: o campo da senha está vazio.')
  });

})