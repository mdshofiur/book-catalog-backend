import express from 'express';
import {
   createBookController,
   getBooksController,
   getBookById,
   deleteBookById,
} from './books.controller';

const bookRouter = express.Router();

bookRouter.post('/api/books', createBookController);

bookRouter.get('/api/books', getBooksController);

bookRouter.get('/api/books/book/:id', getBookById);

bookRouter.delete('/api/books/book/:id', deleteBookById);

export default bookRouter;
