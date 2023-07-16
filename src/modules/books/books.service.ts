import { IBook } from './books.interfaces';
import { BookModel } from './books.model';

/* -------------------------------------------------------------------------- */
/*                            Create a Book service                           */
/* -------------------------------------------------------------------------- */
export async function createBook(book: IBook) {
   const bookEntry = await BookModel.create(book);
   return bookEntry;
}
