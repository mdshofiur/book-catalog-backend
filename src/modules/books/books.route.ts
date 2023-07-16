import express from 'express';
import { createBookController, getBooksController } from './books.controller';

const bookRouter = express.Router();

bookRouter.post('/api/books', createBookController);

bookRouter.get('/api/books', getBooksController);

export default bookRouter;
