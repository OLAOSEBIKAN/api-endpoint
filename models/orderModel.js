const Joi = require("joi");

const validateOrders = api => {
  const schema = {
    id: Joi.number(),
    buyer: Joi.number(),
    car_id: Joi.number(),
    amount: Joi.number(),
    status: Joi.string(),
    price_offered: Joi.number()    
  };

  return Joi.validate(api, schema);
};

module.exports = validateOrders;
