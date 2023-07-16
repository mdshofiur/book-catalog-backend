import express from 'express';
import {
   createBookController,
   getBooksController,
   getBookById,
} from './books.controller';

const bookRouter = express.Router();

bookRouter.post('/api/books', createBookController);

bookRouter.get('/api/books', getBooksController);

bookRouter.get('/api/books/book/:id', getBookById);

export default bookRouter;
