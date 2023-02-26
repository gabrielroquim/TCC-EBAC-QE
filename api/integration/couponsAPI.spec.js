const req = require('supertest');
const authorization = require('../utils/token.json')
const API_URL = process.env.API_URL


describe('API de cupons Loja EBAC', () => {
    let token = "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy"

    it.only('Realizando um GET de cupons', async () => {

        return req('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .get('/coupons')
            .set('Accept', 'application/json')
            .set("Authorization", JSON.stringify(token))
            .then(response => {
                expect(response.status).toBe(200)
                expect(response.body).toBeDefined()
                expect(response.body).toBeInstanceOf(Array)            
                expect(response.body.code).toBe(undefined)
                expect(response.body.id).not.toBe(undefined)
             
            })
    });

    it('Cadastrando CUPOM - POST', () => {
        req('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .post('/coupons')
            .send({
                "code": "Sonic2022",
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste",
            })
            .set('Accept', 'application/json')
            .set("Authorization", JSON.stringify(authorization))
            .then(response => {
                //expect(response.body.data.status).toEqual(400)
                expect(response.status).toEqual(400)
                expect(response.body.message).toEqual('O código de cupom já existe')
            })
    });
})