"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const LibraryServiceImplMongo_js_1 = require("../service/LibraryServiceImplMongo.js");
const tools_js_1 = require("../utils/tools.js");
class BookController {
    constructor() {
        this.libService = new LibraryServiceImplMongo_js_1.LibraryServiceImplMongo();
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.libService.getAllBooks();
        });
    }
    getBooksByGenre(genre) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.libService.getBooksByGenre(genre);
        });
    }
    addBook(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = (0, tools_js_1.convertBookDtoToBook)(dto);
            const addedBook = yield this.libService.addBook(book);
            if (!addedBook) {
                throw new Error(JSON.stringify({ status: 403, message: `Book with id ${book.id} not added` }));
            }
            console.log(addedBook);
            return addedBook;
        });
    }
    pickUpBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.libService.pickUpBook(id);
            return `Book with id ${id} picked up`;
        });
    }
    returnBook(id, reader) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.libService.returnBook(id, reader);
            return `Book with id ${id} returned by ${reader}`;
        });
    }
    removeBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const removedBook = yield this.libService.removeBook(id);
            return removedBook;
        });
    }
}
exports.BookController = BookController;
