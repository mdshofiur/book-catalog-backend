"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const bookRouter = express_1.default.Router();
bookRouter.post('/', books_controller_1.createBookController);
bookRouter.get('/', books_controller_1.getBooksController);
bookRouter.get('/:id', books_controller_1.getBookById);
bookRouter.delete('/:id', books_controller_1.deleteBookById);
bookRouter.put('/:id', books_controller_1.updateBookById);
bookRouter.put('/:id/reviews', books_controller_1.addReviewToBook);
exports.default = bookRouter;
