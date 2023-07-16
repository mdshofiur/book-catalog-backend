import { IBook } from './books.interfaces';
import { BookModel } from './books.model';

/* -------------------------------------------------------------------------- */
/*                            Create a Book service                           */
/* -------------------------------------------------------------------------- */
export async function createBook(book: IBook) {
   const bookEntry = await BookModel.create(book);
   return bookEntry;
}

/* -------------------------------------------------------------------------- */
/*                             Get Books service                             */
/* -------------------------------------------------------------------------- */
export async function getBooks(query: any) {
   const books = await BookModel.find(query);
   return books;
}


/* -------------------------------------------------------------------------- */
/*                             Get Book service                              */
/* -------------------------------------------------------------------------- */

export async function getBook(id: string) {
   const book = BookModel.findById(id);
   return book;
}