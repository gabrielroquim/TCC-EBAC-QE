///<reference types="cypress" />
const { apiAcess } = require('../fixtures')

describe('API de cupons', () => {

    context('Testando os métodos da API de cupons', () => {
        it('Realizando um GET de cupons', () => {
            cy.request({
                method: 'GET',
                url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
                headers: { authorization: apiAcess.authorization }
            }).then(response => {
                expect(response.status).to.equal(200)
            })
        });

        it('Realizando POST de cupom já existente', () => {
            cy.request({
                method: 'POST',
                url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
                headers: { authorization: apiAcess.authorization },
                body: {
                    "code": "nomeCupom",
                    "amount": "10",
                    "discount_type": "fixed_product",
                    "description": "Cupom de desconto de teste",
                },
                failOnStatusCode: false
            }).then(response => {
                expect(response.body.data.status).to.equal(400)
                expect(response.body.message).to.equal('O código de cupom já existe')
            })

        });
    });
});