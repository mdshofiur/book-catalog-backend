"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
require("dotenv/config");
const books_controller_1 = require("./modules/books/books.controller");
const route_1 = __importDefault(require("./route"));
const app = (0, express_1.default)();
require('dotenv').config();
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use('/api', route_1.default);
app.get('/books/new/list', books_controller_1.getBooksController);
app.get('/', (req, res, next) => {
    res.send('Hello World!');
});
exports.default = app;
