import { Pact } from "@pact-foundation/pact"
import { eachLike, somethingLike } from "@pact-foundation/pact/src/dsl/matchers"
import 'dotenv/config'
import { resolve } from 'path'
const mockProvider = new Pact({
    consumer: 'coupons-admin',
    provider: 'coupons-client',
    port: process.env.MOCK_URL,
    log: resolve(process.cwd(), 'logs', 'pact.log'),
    dir: resolve(process.cwd(), 'pacts')

})

describe(' Consumer Test', () => {
    beforeAll(async () => {
        await mockProvider.setup().then(() => {
            mockProvider.addInteraction({
                uponReceiving: 'a request',
                withRequest: {
                    method: 'GET',
                    path: '/coupons',
                    headers: {
                        Authorization: 'Bearer YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
                        "Content-Type": 'aplication/json'
                    },
                    body: {

                    }
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Content-Type": 'aplication/json; charset=UTF-8'
                    },
                    body:
                        eachLike(
                            {
                                "id": somethingLike(8829),
                                "code": somethingLike("vonz"),
                                "amount": somethingLike("20.00"),
                                "date_created": somethingLike("2023-02-25T18:55:47"),
                                "date_created_gmt": somethingLike("2023-02-25T21:55:47"),
                                "date_modified":somethingLike("2023-02-25T18:55:47"),
                                "date_modified_gmt": somethingLike("2023-02-25T21:55:47"),
                                "discount_type": somethingLike("fixed_product"),
                                "description": somethingLike("Cupom reservea"),
                                "date_expires": somethingLike(null),
                                "date_expires_gmt": somethingLike(null),
                                "usage_count":  somethingLike(0),
                                "individual_use": false,
                                "product_ids": [],
                                "excluded_product_ids": [],
                                "usage_limit": null,
                                "usage_limit_per_user": null,
                                "limit_usage_to_x_items": null,
                                "free_shipping": false,
                                "product_categories": [],
                                "excluded_product_categories": [],
                                "exclude_sale_items": false,
                                "minimum_amount": "0.00",
                                "maximum_amount": "0.00",
                                "email_restrictions": [],
                                "used_by": [],
                                "meta_data": [],
                                "_links": {
                                    "self": [
                                        {
                                            "href": "http:\/\/lojaebac.ebaconline.art.br\/wp-json\/wc\/v3\/coupons\/8829"
                                        }
                                    ],
                                    "collection": [
                                        {
                                            "href": "http:\/\/lojaebac.ebaconline.art.br\/wp-json\/wc\/v3\/coupons"
                                        }
                                    ]
                                }
                            }),
                }
            })
        })
    })

    it('should coupons', () => {

    });
});
