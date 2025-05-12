import Joi from "joi";
export const bookDtoSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    quantity: Joi.number().positive().max(100)
});
