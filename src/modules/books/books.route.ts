import express from 'express';
import {
   createBookController,
   getBooksController,
   getBookById,
   deleteBookById,
   updateBookById,
   addReviewToBook,
} from './books.controller';

const bookRouter = express.Router();


bookRouter.post('/', createBookController);

bookRouter.get('/', getBooksController);

bookRouter.get('/:id', getBookById);

bookRouter.delete('/:id', deleteBookById);

bookRouter.put('/:id', updateBookById);

bookRouter.put('/:id/reviews', addReviewToBook);

export default bookRouter;
