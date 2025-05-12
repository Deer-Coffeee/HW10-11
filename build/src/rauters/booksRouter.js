import express from "express";
import { BookController } from "../controllers/BookController.js";
import asyncHandler from "express-async-handler";
import { bookDtoSchema } from "../utils/joiSchemas.js";
export const booksRouter = express.Router();
const controller = new BookController();
booksRouter.get('/', asyncHandler((req, res) => {
    const result = controller.getAllBooks();
    res.type("application/json").json(result);
}));
booksRouter.get('/genre/:genre', asyncHandler((req, res) => {
    const genre = req.params.genre;
    const result = controller.getBooksByGenre(genre);
    res.type("application/json").json(result);
}));
booksRouter.post('/', asyncHandler((req, res) => {
    const dto = req.body;
    const { error } = bookDtoSchema.validate(dto);
    if (error)
        throw new Error(JSON.stringify({ status: 400, message: error.message }));
    const result = controller.addBook(dto);
    res.type("application/json").json(result);
}));
booksRouter.patch('/pick/:id', asyncHandler((req, res) => {
    const { id } = req.params;
    controller.pickUpBook(id);
    res.status(200).end(`Book ${id} picked up`);
}));
booksRouter.patch('/return/:id', asyncHandler((req, res) => {
    const { id } = req.params;
    const { reader } = req.body;
    if (!reader)
        throw new Error(JSON.stringify({ status: 400, message: "Reader name required" }));
    controller.returnBook(id, reader);
    res.status(200).end(`Book ${id} returned by ${reader}`);
}));
booksRouter.delete('/:id', asyncHandler((req, res) => {
    const { id } = req.params;
    const book = controller.removeBook(id);
    res.type("application/json").json(book);
}));
