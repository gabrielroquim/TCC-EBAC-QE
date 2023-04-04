const faker = require('faker-br');
const { apiToken } = require('../../cypress/fixtures/apiToken.json')


describe('Teste da Funcionalidade Produtos', () => {
    let token
    before(() => {
        cy.token('fulano@qa.com', 'teste').then(tkn => { token = tkn })  // vai usar o commands, criei uma variavel tkn , ela vai reeber o token
    });

    context('Testando os métodos da API de cupons EBAC-SHOP', () => {
        it('Realizando um GET de cupons', () => {
            cy.request({
                method: 'GET',
                url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
                headers: { authorization: apiToken.authorization }
            }).then(response => {
                expect(response.status).to.equal(200)
            })
        });

        it('Realizando POST de cupom', () => {
            let code = faker.internet.userName()
            let amount = faker.random.number({ min: 1, max: 15 });
            cy.request({
                method: 'POST',
                url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
                headers: { authorization: apiToken.authorization },
                body: {
                    "code": code,
                    "amount": amount,
                    "discount_type": "fixed_product",
                    "description": "Cupom de desconto",
                },
                failOnStatusCode: false
            }).then(response => {
                expect(response.body.data.status).to.equal(200)
            })
        });
    });
});