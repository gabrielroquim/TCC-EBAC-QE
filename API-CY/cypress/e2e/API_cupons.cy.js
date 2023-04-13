const faker = require('faker');


describe('Teste de API para criação de cupom', () => {
    it('Cupom já existe', () => {
        cy.request({
            method: 'POST',
            url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
            headers: {
                "Connection": "keep-alive",
                "Authorization": "Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy",
                "Content-Type": "application/json"
            },
            body: {
                "code": "PalmeirasVerdesd",
                "amount": "10",
                "discount_type": "fixed_product",
                "description": "Cupom de desconto de teste"
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.code).to.eq("woocommerce_rest_coupon_code_already_exists");
            expect(response.body.message).to.eq("O código de cupom já existe");
        });

        it('Cadastra cupom', () => {

            cy.request({
                method: 'POST',
                url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
                headers: {
                    'Authorization': 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
                    'Content-Type': 'application/json',
                },
                body: {
                    'code': faker.random.alphaNumeric(6),
                    'amount': faker.random.number({ min: 5, max: 50, precision: 2 }).toFixed(2),
                    'discount_type': 'fixed_product',
                    'description': faker.lorem.words(3),
                },
            }).then((response) => {
                if (response.status === 200) {
                } else if (response.status === 400) {
                    const errorMessage = response.body.message
                } else if (response.status === 404) {

                } else {
                }
            })

        });

        it('Realizando um GET de cupons', () => {
            cy.request({
                method: 'GET',
                url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
                headers: {
                    'Authorization': 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
                },
            }).then((response) => {
                expect(response.status).to.equal(200);
            });
        })
    })
})

