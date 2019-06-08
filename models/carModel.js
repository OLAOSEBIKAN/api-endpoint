const Joi = require("joi");

const validateCars = api => {
  const schema = {
    id: Joi.number(),
    Owner: Joi.number().integer(),
    created_on: Joi.string().alphanum(),
    status: Joi.string(),
    state: Joi.string(),
    price: Joi.number()
      .integer()
      ,
    manufacturer: Joi.string(),
    model: Joi.string(),
    body_type: Joi.string()
  };

  return Joi.validate(api, schema);
};

module.exports = validateCars;
