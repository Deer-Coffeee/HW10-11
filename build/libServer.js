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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.launchServer = void 0;
const express_1 = __importDefault(require("express"));
const libConfig_js_1 = require("./config/libConfig.js");
const errorHandler_js_1 = require("./errorHandler/errorHandler.js");
const libRouter_js_1 = require("./rauters/libRouter.js");
const db_js_1 = require("./config/db.js");
const launchServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_js_1.connectDB)();
    const app = (0, express_1.default)();
    app.get('/', (req, res) => {
        res.send('Hello from Library Server! 📚');
    });
    app.listen(libConfig_js_1.PORT, () => console.log(`Server runs at http://localhost:${libConfig_js_1.PORT}`));
    app.use(express_1.default.json());
    app.use('/api', libRouter_js_1.libRouter);
    app.use(errorHandler_js_1.errorHandler);
});
exports.launchServer = launchServer;
