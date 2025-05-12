"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookStatus = exports.BookGenres = void 0;
var BookGenres;
(function (BookGenres) {
    BookGenres["SCI_FI"] = "sci-fi";
    BookGenres["ADVENTURE"] = "adventure";
    BookGenres["FANTASY"] = "fantasy";
    BookGenres["ROMANTIC"] = "love";
    BookGenres["CLASSIC"] = "classic";
    BookGenres["DYSTOPIA"] = "dystopia";
})(BookGenres || (exports.BookGenres = BookGenres = {}));
var BookStatus;
(function (BookStatus) {
    BookStatus["ON_STOCK"] = "ON_STOCK";
    BookStatus["ON_HAND"] = "ON_HAND";
    BookStatus["REMOVED"] = "REMOVED";
})(BookStatus || (exports.BookStatus = BookStatus = {}));
