import Joi = require('joi');

export const schema = Joi.object({
    id: Joi.number().positive(),
    name: Joi.string().required(),
});
