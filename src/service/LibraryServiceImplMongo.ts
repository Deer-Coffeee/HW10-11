import {LibraryService} from "./LibraryService.js";

import {Book, BookGenres, BookStatus} from "../model/Book.js";

import {BookModel} from "../model/BookModel.js";

export class LibraryServiceImplMongo implements LibraryService{

async addBook(book: Book):Promise<boolean>{

const existing =
await BookModel.findOne({title: book.title, author: book.author});

if(existing) return false; await BookModel.create(book); return true;}


async getAllBooks(): Promise<Book[]>{
const books = await BookModel.find();

return books.map((book) =>{
const {_id,__v,...rest} = book.toObject(); return {...rest,id:_id.toString()};
});
}

async getBooksByGenre(genre: BookGenres): Promise<Book[]>{

const books = await BookModel.find({genre});

return books.map((book) =>{
const {_id,__v,...rest}= book.toObject();return {...rest,id:_id.toString()};
});
}

async pickUpBook(id:string):Promise<void>{

const book = await BookModel.findById(id);
if(!book) throw new Error(JSON.stringify({status:404, message:"Book not found!"}));

book.status = BookStatus.ON_HAND;

await book.save();}


async returnBook(id: string, reader: string): Promise<void>{

const book = await BookModel.findById(id);
if(!book) throw new Error(JSON.stringify({status:404, message:"Book not found!"}));

book.status = BookStatus.ON_STOCK;

book.pickList.push({reader, date: new Date().toISOString()});
await book.save();}


async removeBook(id:string): Promise<Book>{

const book = await BookModel.findById(id);
if(!book) throw new Error(JSON.stringify({status:404, message:"Book not found!"}));

book.status = BookStatus.REMOVED;

await book.save();

const {_id,__v,...rest}= book.toObject();

return { ...rest, id:_id.toString()};
}
}

