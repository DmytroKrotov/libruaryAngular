import { Component, NgModule, inject } from '@angular/core';
import { BooksService } from '../services/books.service';
import { FormsModule } from '@angular/forms';
import { Book } from '../../Book';
import { StylesService } from '../services/styles.service';
import { CommonModule } from '@angular/common';






@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  private bookService=inject(BooksService);
  books:Book[]=[];
  booksToShow: Book[]=[];

  
  darkStyle:StylesService=inject(StylesService);
  
  
  private searchValue : string="";
  public get SearchValue() : string {
    return this.searchValue;
  }
  public set SearchValue(v : string) {
    console.log(this.searchValue);
    this.searchValue = v;
  }
  

  ngOnInit(): void {
    this.loadBooks();
    
  }
  
  loadBooks()
  {
    this.bookService.getBooks().subscribe((books:any)=>{
      console.log(books);
      this.books=books;
      this.booksToShow=books;
    });
  }
  searchValueChange()
  {
    this.booksToShow=this.books.filter((book:Book)=>{
      const bookTarget:string=book.title.toLowerCase();
      return bookTarget.includes(this.searchValue.toLowerCase());
    });
  }
}
