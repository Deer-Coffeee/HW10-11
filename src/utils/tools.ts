import {BookDto} from "../model/BookDto.js";
import {Book, BookGenres, BookStatus} from "../model/Book.js";
import {v4 as uuidv4} from 'uuid';

function getGenre(genre: string) {
    const bookGenre =
        Object.values(BookGenres).find(v => v === genre)
    if(!bookGenre) throw new Error (JSON.stringify({status: 400, message: "Wrong genre"}))
    return bookGenre;
}

export const convertBookDtoToBook = (dto: BookDto):Book => {
    return{
        id: uuidv4(),
        author: dto.author,
        title: dto.title,
        status: BookStatus.ON_STOCK,
        genre: getGenre(dto.genre),
        pickList: []
    }
}