import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import bookRouter from './modules/books/books.route';

const app: Express = express();
require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(bookRouter);

app.get('/', (req: Request, res: Response, next: NextFunction) => {
   res.send('Hello World!');
});

export default app;
