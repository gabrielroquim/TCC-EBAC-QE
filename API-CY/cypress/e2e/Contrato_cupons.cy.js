import contrato from '../contracts/cupons.contracts'
const { apiToken } = require('../fixtures/apiToken.json')

describe('Teste de contrato de cupons', () => {
    it('Validar contrato de cupons', () => {
        cy.request({
            method: 'GET',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers: { authorization: apiToken.authorization }

        }).then(response => {
            return contrato.validateAsync(response.body)
        })
    });
});