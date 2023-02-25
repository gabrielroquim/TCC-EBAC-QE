///<reference types="cypress" />
const request = require('supertest');
const authorization = require('../utils/utils.json')

describe('Login - API CUPOM SHOP', () => {
        

    it.only('Login', () => {
        cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/rest-api/docs/#/coupons/post_wc_v3_coupons',
            body: {
                "username": "admin_ebac",
                "paswword": "@admin!&b@c!2022"
            }

        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
            cy.log(response.body.authorization)
        }) 
    });
    
    it('Realizando POST de cupom já existente', () => {
        cy.request('http://lojaebac.ebaconline.art.br/wp-json/wc/v3')
            .post('/coupons')
            .send({
                "code": "nomeCupom",
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

    it('Cadastrar Cupom', () => {
        let produto = `QAEBAC ${Math.floor(Math.random() * 100000)}` //esta usando uma funça do javascript para gerar um numero randomico, pois assim podemnos cadastrar varios prodtuso com numeros diferesntes
        cy.request({
            method: 'POST',
            url: 'produtos',
            body: {
                "nome": produto, // vai usar o metodo javascript passado acima
                "preco": 370,
                "descricao": "Console",
                "quantidade": 50
            },
            headers: { authorization: token }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        })

    });
});