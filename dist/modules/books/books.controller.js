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
exports.addReviewToBook = exports.updateBookById = exports.deleteBookById = exports.getBookById = exports.getBooksController = exports.createBookController = void 0;
const books_service_1 = require("./books.service");
const books_model_1 = require("./books.model");
// Create book controller
function createBookController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newBook = yield (0, books_service_1.createBook)(req.body);
            res.status(201).json({
                message: 'Book created successfully',
                book: newBook,
            });
        }
        catch (error) {
            res.status(500).json({
                error: 'Failed to create the book.',
                message: error.message,
            });
        }
    });
}
exports.createBookController = createBookController;
// Get books controller
function getBooksController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { title, author, genre, publicationYear } = req.query;
            const query = {};
            if (title)
                query.title = { $regex: title.toString(), $options: 'i' };
            if (author)
                query.author = { $regex: author.toString(), $options: 'i' };
            if (genre)
                query.genre = { $regex: genre.toString(), $options: 'i' };
            if (publicationYear) {
                const startDate = new Date(parseInt(publicationYear.toString()), 0, 1);
                const endDate = new Date(parseInt(publicationYear.toString()) + 1, 0, 1);
                query.publicationDate = { $gte: startDate, $lt: endDate };
            }
            const books = yield (0, books_service_1.getBooks)(query);
            res.json({ message: 'Books retrieved successfully', books: books });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Failed to retrieve books',
                message: error.message,
            });
        }
    });
}
exports.getBooksController = getBooksController;
// Get book by id controller
function getBookById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield (0, books_service_1.getBook)(req.params.id);
            res.json({ message: 'Book retrieved successfully', book: book });
        }
        catch (error) {
            res.status(500).json({
                error: 'Failed to retrieve book',
                message: error.message,
            });
        }
    });
}
exports.getBookById = getBookById;
// Delete book by id controller
function deleteBookById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield (0, books_service_1.deleteBook)(req.params.id);
            res.json({ message: 'Book deleted successfully', book: book });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Failed to delete book',
                message: error.message,
            });
        }
    });
}
exports.deleteBookById = deleteBookById;
// Update book by id controller
function updateBookById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield (0, books_service_1.updateBook)(req.params.id, req.body);
            res.json({ message: 'Book updated successfully', book: book });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Failed to update book',
                message: error.message,
            });
        }
    });
}
exports.updateBookById = updateBookById;
// Add reviews to book controller
function addReviewToBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const book = yield books_model_1.BookModel.findById(req.params.id);
            book.reviews.push(req.body.reviews);
            yield book.save();
            res.json({ message: 'Review added successfully', book: book });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Failed to add review',
                message: error.message,
            });
        }
    });
}
exports.addReviewToBook = addReviewToBook;
