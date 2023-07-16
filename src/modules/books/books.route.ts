import express from 'express';
import { createBookController } from './books.controller';

const bookRouter = express.Router();

bookRouter.post('/api/books', createBookController);

export default bookRouter;
