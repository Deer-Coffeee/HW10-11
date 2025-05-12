import Joi, {ObjectSchema} from "joi";
import {BookDto} from "../model/BookDto.js";

export const bookDtoSchema:ObjectSchema<BookDto> = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    genre: Joi.string().required(),
    quantity: Joi.number().positive().max(100)
})