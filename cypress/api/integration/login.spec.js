/// <reference types="cypress" />
const req = require('supertest');

describe('Login - API CUPOM SHOP', () => {
    let token
    before(() => {
        cy.token('admin_ebac', '@admin!&b@c!2022').then(tkn => { token = tkn })  // vai usar o commands, criei uma variavel tkn , ela vai reeber o token
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