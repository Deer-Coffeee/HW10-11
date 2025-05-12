import express from "express";

import asyncHandler from "express-async-handler";

import {BookController} from "../controllers/BookController.js";

import {Book} from "../model/Book.js";

import {BookGenres} from "../model/Book.js";

import {BookDto} from "../model/BookDto.js";

import {bookDtoSchema} from "../utils/joiSchemas.js";


export const booksRouter = express.Router();
const controller = new BookController();

booksRouter.get('/',asyncHandler(async(req,
res) =>{

const result: Book[] = await controller.getAllBooks();

res.type("application/json").json(result);
}));


booksRouter.get('/genre/:genre',asyncHandler(async(req,
res) =>{

const genre = req.params.genre as BookGenres;

const result = await controller.getBooksByGenre(genre);

res.type("application/json").json(result);
}));


booksRouter.post('/',asyncHandler(async(req,
res) =>{

const dto = req.body;

const {error} = bookDtoSchema.validate(dto);

if (error) throw new Error(JSON.stringify({status: 400, message: error.message}));

const result: Book = await controller.addBook(dto as BookDto);

res.type("application/json").json(result);
}));


booksRouter.patch('/pick/:id',asyncHandler(async(req,
res) =>{

const {id} = req.params;

await controller.pickUpBook(id);

res.status(200).end(`Book ${id} picked up`);
}));


booksRouter.patch('/return/:id',asyncHandler(async(req,
res) =>{

const {id} = req.params;

const {reader} = req.body;

if(!reader) throw new Error(JSON.stringify({status: 400, message: "Reader name required"}));

await controller.returnBook(id, reader);

res.status(200).end(`Book ${id} returned by ${reader}`);
}));


booksRouter.delete('/:id',asyncHandler(async(req,
res) =>{

const {id} = req.params;

const book = await controller.removeBook(id);

res.type("application/json").json(book);
}));
