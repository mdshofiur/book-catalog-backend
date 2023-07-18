"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksRouter = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post('/', books_controller_1.createBookController);
router.get('/', books_controller_1.getBooksController);
router.get('/:id', books_controller_1.getBookById);
router.delete('/:id', books_controller_1.deleteBookById);
router.put('/:id', books_controller_1.updateBookById);
router.put('/:id/reviews', books_controller_1.addReviewToBook);
exports.booksRouter = router;
