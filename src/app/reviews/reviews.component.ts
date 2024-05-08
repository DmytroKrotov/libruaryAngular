import { Component, inject } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Book } from '../../Book';
import { FormsModule } from '@angular/forms';
import { StylesService } from '../services/styles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  private bookService=inject(BooksService);
  books:Book[]=[];
  booksToShow: Book[]=[];

  reviewValue:number=0;
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

  reviewsValueChange()
  {
    
    let reviews=document.querySelector("select")?.value as any;
    console.log(reviews);
    this.reviewValue=reviews as number;
    console.log(this.booksToShow);

    this.booksToShow=this.books.filter((book:Book)=>{
      const bookTarget:string=book.title.toLowerCase();
      return bookTarget.includes(this.searchValue.toLowerCase());
    });
    
    let newBooksToShow=this.booksToShow.map((book)=>{
      let newReviews=book.reviews.map((i:string)=>i);
      newReviews.length=this.reviewValue;
      let updateBook=new Book;
      updateBook.id=book.id;
      updateBook.title=book.title;
      updateBook.author=book.author;
      updateBook.reviews=newReviews;
      return updateBook });

      this.booksToShow=newBooksToShow;
      console.log(this.booksToShow);
    
  }
}
