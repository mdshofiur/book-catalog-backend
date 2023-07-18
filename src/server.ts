import express, { Express} from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import mongoose from 'mongoose';
import { addReviewToBook, createBookController, deleteBookById, getBookById, getBooksController, updateBookById } from './modules/books/books.controller';

const app: Express = express();
require('dotenv').config();

const port: number = 2000;
const uri: string = "mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority"


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());


app.post('/api/books', createBookController);
app.get('/api/books', getBooksController);
app.get('/api/books/:id', getBookById);
app.delete('/api/books/:id', deleteBookById);
app.put('/api/books/:id', updateBookById);
app.put('/api/books/:id/reviews', addReviewToBook);

app.listen(port, async () => {
   try {
      await mongoose.connect(uri);
      console.log('Database is connected');
      console.log(`Example app listening on port ${port}`);
   } catch (error) {
      console.log('Database connect error', error);
   }
});
