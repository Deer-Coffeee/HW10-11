"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryServiceImplEmbedded = void 0;
const Book_js_1 = require("../model/Book.js");
class LibraryServiceImplEmbedded {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        const index = this.books.findIndex(item => item.id === book.id);
        if (index === -1) {
            this.books.push(book);
            return true;
        }
        return false;
    }
    getAllBooks() {
        return [...this.books];
    }
    getBooksByGenre(genre) {
        return this.books.filter(book => book.genre === genre);
    }
    pickUpBook(id) {
        const book = this.books.find(book => book.id === id);
        if (!book)
            throw new Error(JSON.stringify({ status: 404, message: "Book not found" }));
        book.status = Book_js_1.BookStatus.ON_HAND;
    }
    returnBook(id, reader) {
        const book = this.books.find(book => book.id === id);
        if (!book)
            throw new Error(JSON.stringify({ status: 404, message: "Book not found" }));
        book.status = Book_js_1.BookStatus.ON_STOCK;
        const record = {
            reader,
            date: new Date().toISOString()
        };
        book.pickList.push(record);
    }
    removeBook(id) {
        const index = this.books.findIndex(book => book.id === id);
        if (index === -1)
            throw new Error(JSON.stringify({ status: 404, message: "Book not found" }));
        const [removed] = this.books.splice(index, 1);
        removed.status = Book_js_1.BookStatus.REMOVED;
        return removed;
    }
}
exports.LibraryServiceImplEmbedded = LibraryServiceImplEmbedded;
