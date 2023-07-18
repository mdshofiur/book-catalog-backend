import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import bookRouter from './modules/books/books.route';
import { addReviewToBook, createBookController, deleteBookById, getBookById, getBooksController, updateBookById } from './modules/books/books.controller';

const app: Express = express();
require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// app.post('/api/books', createBookController);
// app.get('/api/books', getBooksController);
// app.get('/api/books/:id', getBookById);
// app.delete('/api/books/:id', deleteBookById);
// app.put('/api/books/:id', updateBookById);
// app.put('/api/books/:id/reviews', addReviewToBook);

app.use(bookRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.send('Hello World!');
});

export default app;
