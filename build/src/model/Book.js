export var BookGenres;
(function (BookGenres) {
    BookGenres["SCI_FI"] = "sci-fi";
    BookGenres["ADVENTURE"] = "adventure";
    BookGenres["FANTASY"] = "fantasy";
    BookGenres["ROMANTIC"] = "love";
    BookGenres["CLASSIC"] = "classic";
    BookGenres["DYSTOPIA"] = "dystopia";
})(BookGenres || (BookGenres = {}));
export var BookStatus;
(function (BookStatus) {
    BookStatus[BookStatus["ON_STOCK"] = 0] = "ON_STOCK";
    BookStatus[BookStatus["ON_HAND"] = 1] = "ON_HAND";
    BookStatus[BookStatus["REMOVED"] = 2] = "REMOVED";
})(BookStatus || (BookStatus = {}));
