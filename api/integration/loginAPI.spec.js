const req = require('supertest');
const authorization = require('../utils/utils.json')
c//onst ApiUrl = "http://lojaebac.ebaconline.art.br/wp-json/wc/v3";


describe('API de cupons', () => {
    beforeAll( async() => {
        
    })
    it('Realizando um GET de cupons', () => {
        request('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .get('/coupons')
            .set('Accept', 'application/json')
            .set("Authorization", JSON.stringify(authorization))
            .then(response => {
                expect(response.status).toEqual(200)
            })
    });
})