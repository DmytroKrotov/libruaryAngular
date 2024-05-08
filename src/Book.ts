import { Author } from "./Author";

export class Book
{
    id:string="";
    title:string="";
    author!:Author;
    reviews:string[]=[];
}