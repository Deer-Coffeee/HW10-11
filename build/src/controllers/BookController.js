import { LibraryServiceImplEmbedded } from "../service/LibraryServiceImplEmbedded.js";
import { convertBookDtoToBook } from "../utils/tools.js";
export class BookController {
    constructor() {
        this.libService = new LibraryServiceImplEmbedded();
    }
    getAllBooks() {
        return this.libService.getAllBooks();
    }
    getBooksByGenre(genre) {
        return this.libService.getBooksByGenre(genre);
    }
    addBook(dto) {
        const book = convertBookDtoToBook(dto);
        if (this.libService.addBook(book)) {
            console.log(book);
            return book;
        }
        throw new Error(JSON.stringify({ status: 403, message: `Book with id ${book.id} not added` }));
    }
    pickUpBook(id) {
        this.libService.pickUpBook(id);
    }
    returnBook(id, reader) {
        this.libService.returnBook(id, reader);
    }
    removeBook(id) {
        return this.libService.removeBook(id);
    }
}
