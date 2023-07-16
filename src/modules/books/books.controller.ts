import { Request, Response } from 'express';
import { createBook } from './books.service';

export async function createBookController(req: Request, res: Response) {
   try {
      const newBook = await createBook(req.body);
      res.status(201).json({
         message: 'Book created successfully',
         book: newBook,
      });
   } catch (error) {
      res.status(500).json({ error: 'Failed to create the book.' });
   }
}
