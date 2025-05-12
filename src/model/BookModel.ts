import mongoose, {Schema, Document} from 'mongoose';

import {BookGenres, BookStatus, PickRecord} from './Book';

const pickRecordSchema = new Schema<PickRecord>({
reader:{type:String, required:true},
date:{type:String, required:true},
});

const bookSchema = new Schema({

title:{type:String, required:true},

author:{type:String, required:true},

genre:{type:String, enum:Object.values(BookGenres),
required: true},

status:{type:String, enum:Object.values(BookStatus),
default: BookStatus.ON_STOCK},

pickList:{type: [pickRecordSchema],default:[]},
});

export const BookModel =
mongoose.model('Book', bookSchema);
