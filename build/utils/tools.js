"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBookDtoToBook = void 0;
const Book_js_1 = require("../model/Book.js");
const uuid_1 = require("uuid");
function getGenre(genre) {
    const bookGenre = Object.values(Book_js_1.BookGenres).find(v => v === genre);
    if (!bookGenre)
        throw new Error(JSON.stringify({ status: 400, message: "Wrong genre" }));
    return bookGenre;
}
const convertBookDtoToBook = (dto) => {
    return {
        id: (0, uuid_1.v4)(),
        author: dto.author,
        title: dto.title,
        status: Book_js_1.BookStatus.ON_STOCK,
        genre: getGenre(dto.genre),
        pickList: []
    };
};
exports.convertBookDtoToBook = convertBookDtoToBook;
