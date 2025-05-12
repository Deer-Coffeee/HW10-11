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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryServiceImplMongo = void 0;
const Book_js_1 = require("../model/Book.js");
const BookModel_js_1 = require("../model/BookModel.js");
class LibraryServiceImplMongo {
    addBook(book) {
        return __awaiter(this, void 0, void 0, function* () {
            const existing = yield BookModel_js_1.BookModel.findOne({ title: book.title, author: book.author });
            if (existing)
                return false;
            yield BookModel_js_1.BookModel.create(book);
            return true;
        });
    }
    getAllBooks() {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield BookModel_js_1.BookModel.find();
            return books.map((book) => {
                const _a = book.toObject(), { _id, __v } = _a, rest = __rest(_a, ["_id", "__v"]);
                return Object.assign(Object.assign({}, rest), { id: _id.toString() });
            });
        });
    }
    getBooksByGenre(genre) {
        return __awaiter(this, void 0, void 0, function* () {
            const books = yield BookModel_js_1.BookModel.find({ genre });
            return books.map((book) => {
                const _a = book.toObject(), { _id, __v } = _a, rest = __rest(_a, ["_id", "__v"]);
                return Object.assign(Object.assign({}, rest), { id: _id.toString() });
            });
        });
    }
    pickUpBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield BookModel_js_1.BookModel.findById(id);
            if (!book)
                throw new Error(JSON.stringify({ status: 404, message: "Book not found" }));
            book.status = Book_js_1.BookStatus.ON_HAND;
            yield book.save();
        });
    }
    returnBook(id, reader) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield BookModel_js_1.BookModel.findById(id);
            if (!book)
                throw new Error(JSON.stringify({ status: 404, message: "Book not found" }));
            book.status = Book_js_1.BookStatus.ON_STOCK;
            book.pickList.push({ reader, date: new Date().toISOString() });
            yield book.save();
        });
    }
    removeBook(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const book = yield BookModel_js_1.BookModel.findById(id);
            if (!book)
                throw new Error(JSON.stringify({ status: 404, message: "Book not found" }));
            book.status = Book_js_1.BookStatus.REMOVED;
            yield book.save();
            const _a = book.toObject(), { _id, __v } = _a, rest = __rest(_a, ["_id", "__v"]);
            return Object.assign(Object.assign({}, rest), { id: _id.toString() });
        });
    }
}
exports.LibraryServiceImplMongo = LibraryServiceImplMongo;
