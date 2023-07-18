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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBook = exports.deleteBook = exports.getBook = exports.getBooks = exports.createBook = void 0;
const books_model_1 = require("./books.model");
/* -------------------------------------------------------------------------- */
/*                            Create a Book service                           */
/* -------------------------------------------------------------------------- */
function createBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        const bookEntry = yield books_model_1.BookModel.create(book);
        return bookEntry;
    });
}
exports.createBook = createBook;
/* -------------------------------------------------------------------------- */
/*                             Get Books service                             */
/* -------------------------------------------------------------------------- */
function getBooks(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const books = yield books_model_1.BookModel.find(query);
        return books;
    });
}
exports.getBooks = getBooks;
/* -------------------------------------------------------------------------- */
/*                             Get Book service                              */
/* -------------------------------------------------------------------------- */
function getBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = books_model_1.BookModel.findById(id);
        return book;
    });
}
exports.getBook = getBook;
/* -------------------------------------------------------------------------- */
/*                             Delete Book service                           */
/* -------------------------------------------------------------------------- */
function deleteBook(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const book = books_model_1.BookModel.findByIdAndDelete(id);
        return book;
    });
}
exports.deleteBook = deleteBook;
/* -------------------------------------------------------------------------- */
/*                             Update Book service                           */
/* -------------------------------------------------------------------------- */
function updateBook(id, book) {
    return __awaiter(this, void 0, void 0, function* () {
        const updateBook = books_model_1.BookModel.updateOne({ _id: id }, book);
        return updateBook;
    });
}
exports.updateBook = updateBook;
