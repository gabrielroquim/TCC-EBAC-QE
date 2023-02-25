const req = require('supertest');
const authorization = require('../utils/token.json')



describe('API de cupons', () => { 
let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"
    it('Realizando um GET de cupons', async () => {
      return req('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .get('/coupons')
            .set('Accept', 'application/json')
            .set("Authorization", JSON.stringify(token))
            .then(response => {
                expect(response.status).toEqual(200)
                expect(response.body.id).not.toBe(toString);
            })
    });
})