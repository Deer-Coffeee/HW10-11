import {LibraryServiceImplMongo} from "../service/LibraryServiceImplMongo.js";

import {LibraryService} from "../service/LibraryService.js";

import {BookDto} from "../model/BookDto.js";

import {Book, BookGenres} from "../model/Book.js";

import {convertBookDtoToBook} from "../utils/tools.js";

export class BookController{

private libService: LibraryService = new LibraryServiceImplMongo();



async getAllBooks(){

return await this.libService.getAllBooks();}

async getBooksByGenre(genre: BookGenres){

return await this.libService.getBooksByGenre(genre);}


async addBook(dto: BookDto){

const book: Book = convertBookDtoToBook(dto);

const addedBook = await this.libService.addBook(book);

if(!addedBook){
throw new Error(JSON.stringify({status:403, message: `Book with id ${book.id} not added`}));
}

console.log(addedBook);
return addedBook;}


async pickUpBook(id: string){

await this.libService.pickUpBook(id);

return `Book with id ${id} picked up`;}


async returnBook(id:string,reader:string){

await this.libService.returnBook(id, reader);

return `Book with id ${id} returned by ${reader}`;}


async removeBook(id:string){

const removedBook =
await this.libService.removeBook(id);

return removedBook;}
}

