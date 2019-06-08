const Joi = require('joi');

const validateLogin = (api) => {
    const schema = {        
        id:Joi.number(),
        first_name:Joi.string(),
        last_name:Joi.string(),
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password:Joi.string().required(),
        address:Joi.string().required(),
        is_Admin: Joi.boolean().required()          
              
};
    return  Joi.validate(api, schema);    
}
 
module.exports = validateLogin;

