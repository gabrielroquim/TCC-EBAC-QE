import { Pact } from "@pact-foundation/pact"
import { eachLike, somethingLike } from "@pact-foundation/pact/src/dsl/matchers"
import 'dotenv/config'
import { resolve } from 'path'
import { couponsList } from "../request/coupons.request"

const mockProvider = new Pact({
    consumer: 'coupons-admin',
    provider: 'coupons-client',
    port: parseInt(process.env.MOCK_URL),
    log: resolve(process.cwd(), 'logs', 'pact.log'),
    dir: resolve(process.cwd(), 'pacts')
})

describe('Consumer Test', () => {
    beforeAll(async () => {
        await mockProvider.setup().then(() => {
            mockProvider.addInteraction({
                uponReceiving: 'a request',
                withRequest: {
                    method: 'GET',
                    path: '/coupons',
                    headers: {
                        Authorization: 'Bearer YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy',
                        "Accept": 'application/json'
                    },
                    body: {
                        "context": "view",
                        "per_page": 4,
                        "order": "desc",
                        "orderby": "date"
                    }
                },
                willRespondWith: {
                    status: 200,
                    headers: {
                        "Accept": 'application/json'
                    },
                    body: {
                        "data": eachLike(
                            {
                                "id": somethingLike(8829),
                                "code": somethingLike("vonz"),
                                "amount": somethingLike("20.00"),
                                "date_created": somethingLike("2023-02-25T18:55:47"),
                                "date_created_gmt": somethingLike("2023-02-25T21:55:47"),
                                "date_modified": somethingLike("2023-02-25T18:55:47"),
                                "date_modified_gmt": somethingLike("2023-02-25T21:55:47"),
                                "discount_type": somethingLike("fixed_product"),
                                "description": somethingLike("Cupom reservea"),
                                "date_expires": somethingLike(null),
                                "date_expires_gmt": somethingLike(null),
                                "usage_count": somethingLike(0),
                                "individual_use": somethingLike(false),
                                "product_ids": somethingLike([]),
                                "excluded_product_ids": somethingLike([]),
                                "usage_limit": somethingLike(null),
                                "usage_limit_per_user": somethingLike(null),
                                "limit_usage_to_x_items": somethingLike(null),
                                "free_shipping": somethingLike(false),
                                "product_categories": somethingLike([]),
                                "excluded_product_categories": somethingLike([]),
                                "exclude_sale_items": somethingLike(false),
                                "minimum_amount": somethingLike("0.00"),
                                "maximum_amount": somethingLike("0.00"),
                                "email_restrictions": somethingLike([]),
                                "used_by": somethingLike([]),
                                "meta_data": somethingLike([]),
                                "_links": null
                            })
                    }
                }
            })
        })
        afterAll(() => mockProvider.finalize())
        // afterEach( () =>  mockProvider.verify())

        it('should  return list coupons', () => {
            couponsList().then(response => {
                const { code, description } = response.id[1]

                expect(response.status).toEqual(200)
                expect(code).toBe('vonz')
                expect(description).toBe('Cupom reservea')
            })
        });

    })

})