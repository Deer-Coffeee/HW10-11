"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookDtoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.bookDtoSchema = joi_1.default.object({
    title: joi_1.default.string().required(),
    author: joi_1.default.string().required(),
    genre: joi_1.default.string().required(),
    quantity: joi_1.default.number().positive().max(100)
});
