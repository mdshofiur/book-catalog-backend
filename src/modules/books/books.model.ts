import mongoose, { Schema } from 'mongoose';
import { IBook } from './books.interfaces';

const bookSchema = new Schema<IBook>({
   title: { type: String, required: true },
   author: { type: String, required: true },
   genre: { type: String, required: true },
   publicationDate: { type: Date, required: true },
   reviews: [{ type: String }],
});

export const BookModel = mongoose.model<IBook>('Book', bookSchema);
