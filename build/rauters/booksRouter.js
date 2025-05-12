"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const express_1 = __importDefault(require("express"));
const BookController_js_1 = require("../controllers/BookController.js");
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const joiSchemas_js_1 = require("../utils/joiSchemas.js");
exports.booksRouter = express_1.default.Router();
const controller = new BookController_js_1.BookController();
exports.booksRouter.get('/', (0, express_async_handler_1.default)((req, res) => {
    const result = controller.getAllBooks();
    res.type("application/json").json(result);
}));
exports.booksRouter.get('/genre/:genre', (0, express_async_handler_1.default)((req, res) => {
    const genre = req.params.genre;
    const result = controller.getBooksByGenre(genre);
    res.type("application/json").json(result);
}));
exports.booksRouter.post('/', (0, express_async_handler_1.default)((req, res) => {
    const dto = req.body;
    const { error } = joiSchemas_js_1.bookDtoSchema.validate(dto);
    if (error)
        throw new Error(JSON.stringify({ status: 400, message: error.message }));
    const result = controller.addBook(dto);
    res.type("application/json").json(result);
}));
exports.booksRouter.patch('/pick/:id', (0, express_async_handler_1.default)((req, res) => {
    const { id } = req.params;
    controller.pickUpBook(id);
    res.status(200).end(`Book ${id} picked up`);
}));
exports.booksRouter.patch('/return/:id', (0, express_async_handler_1.default)((req, res) => {
    const { id } = req.params;
    const { reader } = req.body;
    if (!reader)
        throw new Error(JSON.stringify({ status: 400, message: "Reader name required" }));
    controller.returnBook(id, reader);
    res.status(200).end(`Book ${id} returned by ${reader}`);
}));
exports.booksRouter.delete('/:id', (0, express_async_handler_1.default)((req, res) => {
    const { id } = req.params;
    const book = controller.removeBook(id);
    res.type("application/json").json(book);
}));
