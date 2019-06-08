const Joi = require('joi');

const validateFlags = (api) => {
    const schema ={
        id:Joi.number(),
        car_id:Joi.number(),
        created_on:Joi.string().alphanum(),
        reason: Joi.string(),
        description:Joi.string()              
                
    };    
    return  Joi.validate(api, schema);    
}
 
module.exports = validateFlags;

