"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.libRouter = void 0;
const express_1 = __importDefault(require("express"));
const booksRouter_js_1 = require("./booksRouter.js");
exports.libRouter = express_1.default.Router();
exports.libRouter.use('/books', booksRouter_js_1.booksRouter);
