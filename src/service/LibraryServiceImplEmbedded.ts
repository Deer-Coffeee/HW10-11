import {LibraryService} from "./LibraryService.js";
import {Book, BookGenres, BookStatus, PickRecord} from "../model/Book.js";

export class LibraryServiceImplEmbedded implements LibraryService{
private books: Book[]=[];

addBook(book:Book):boolean{
const index = this.books.findIndex(item => item.id === book.id);

if(index === -1){
this.books.push(book);
return true;
}
return false;
}

getAllBooks():Book[]{
return [...this.books];}

getBooksByGenre(genre: BookGenres):Book[]{
return this.books.filter(book => book.genre === genre);}

pickUpBook(id: string): void{
const book =
this.books.find(book => book.id === id);

if(!book) throw new Error(JSON.stringify({status:404, message:"Book not found!"}));
book.status = BookStatus.ON_HAND;}

returnBook(id: string, reader: string): void{
const book =
this.books.find(book => book.id === id);

if(!book) throw new Error(JSON.stringify({status:404, message:"Book not found!"}));
book.status = BookStatus.ON_STOCK;

const record: PickRecord ={
reader, date: new Date().toISOString()};
book.pickList.push(record);}

removeBook(id: string): Book{
const index =
this.books.findIndex(book=> book.id === id);

if(index === -1) throw new Error(JSON.stringify({status:404, message:"Book not found!"}));
const [removed] = this.books.splice(index, 1);

removed.status = BookStatus.REMOVED;
return removed;}
}
