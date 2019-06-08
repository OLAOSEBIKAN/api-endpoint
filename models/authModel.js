const Joi = require('joi');

const validateRegister = (api) => {

    const schema = {
        token:Joi.string(),
        id:Joi.number(),
        first_name:Joi.string().required(),
        last_name:Joi.string().required(),
        email: Joi.string().required(),
        is_Admin:Joi.boolean().required(),
        password:Joi.string().required(),
        address:Joi.string().required()     
              
};
    return  Joi.validate(api, schema);    
}
 
module.exports = validateRegister;

