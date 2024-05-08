import { Component, inject } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../../Book';
import { Author } from '../../Author';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StylesService } from '../services/styles.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})


export class AuthorsComponent {
  private bookService=inject(BooksService);
  books:Book[]=[];
  authors:Author[]=[];
  authorsToShow: Author[]=[];
  
  darkStyle:StylesService=inject(StylesService);
  private searchValue : string="";
  public get SearchValue() : string {
    return this.searchValue;
  }
  public set SearchValue(v : string) {
    this.searchValue = v;
  }
  

  ngOnInit(): void {
    this.loadBooks();
    
  }
  
  loadBooks()
  {
    this.bookService.getBooks().subscribe((books:any)=>{
      this.books=books as Book[];
      const uniqueAuthors=new Set(books.map((book:Book)=>book.author));
      this.authors=Array.from(uniqueAuthors) as Author[];
      this.authorsToShow=this.authors;
    });
  }
  searchValueChange()
  {
    this.authorsToShow=this.authors.filter((author:Author)=>{
      const authorNameTarget:string=author.name.toLowerCase();
      const authorLastNameTarget:string=author.lastName.toLowerCase();
      return authorNameTarget.includes(this.searchValue.toLowerCase())||authorLastNameTarget.includes(this.searchValue.toLowerCase());
    });
  }
}
