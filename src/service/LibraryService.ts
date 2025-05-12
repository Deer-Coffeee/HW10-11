import {Book, BookGenres} from "../model/Book";

export interface LibraryService{

addBook: (book: Book) => Promise<boolean>;

getAllBooks: () => Promise<Book[]>;

getBooksByGenre: (genre: BookGenres) => Promise<Book[]>;

pickUpBook: (id: string) => Promise<void>;

returnBook: (id: string, reader: string) => Promise<void>;

removeBook: (id: string) => Promise<Book>;
}
