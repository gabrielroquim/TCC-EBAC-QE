const Joi = require("joi")

const cupomSchema = Joi.array().items({
    id: Joi.number(),
    code: Joi.string(),
    amount: Joi.string(),
    date_created: Joi.string(),
    date_created_gmt: Joi.string(),
    date_modified: Joi.string(),
    date_modified_gmt: Joi.string(),
    discount_type: Joi.string(),
    description: Joi.string(),
    date_expires: Joi.string().empty(null),
    date_expires_gmt: Joi.string().empty(null),
    usage_count: Joi.number(),
    individual_use: Joi.boolean(),
    product_ids: Joi.array(),
    excluded_product_ids: Joi.array(), 
    usage_limit: Joi.string().empty(null),
    usage_limit_per_user: Joi.string().empty(null),
    limit_usage_to_x_items: Joi.string().empty(null),
    free_shipping: Joi.boolean(),
    product_categories: Joi.array(), 
    excluded_product_categories: Joi.array(), 
    exclude_sale_items: Joi.boolean(),
    minimum_amount: Joi.string(),
    maximum_amount: Joi.string(),
    email_restrictions: Joi.array(), 
    used_by: Joi.array(), 
    meta_data: Joi.array(), 
    _links: Joi.any(),
})


export default cupomSchema