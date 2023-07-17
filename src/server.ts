import mongoose from 'mongoose';
import app from './app';
import express from 'express';
import { addReviewToBook, createBookController, deleteBookById, getBookById, getBooksController, updateBookById } from './modules/books/books.controller';


const port: number = 2000;
// const uri: any = process.env.DB_URL || 'mongodb://localhost:27017/firstdb';
const uri: any = "mongodb+srv://testingDatabase:LmlkuPM6zWk6hdW5@cluster0.e7yhr.mongodb.net/cow-hurt?retryWrites=true&w=majority"

const bookRouter = express.Router();

bookRouter.post('/api/books', createBookController);

bookRouter.get('/api/books', getBooksController);

bookRouter.get('/api/books/book/:id', getBookById);

bookRouter.delete('/api/books/book/:id', deleteBookById);

bookRouter.put('/api/books/book/:id', updateBookById);

bookRouter.put('/api/books/book/:id/reviews', addReviewToBook);

app.listen(port, async () => {
   try {
      await mongoose.connect(uri);
      console.log('Database is connected');
      console.log(`Example app listening on port ${port}`);
   } catch (error) {
      console.log('Database connect error', error);
   }
});
