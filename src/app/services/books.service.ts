import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const BASE_URL="http://localhost:3000/books";
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private http=inject(HttpClient)
  constructor() { }
  getBooks()
  {
    return this.http.get(BASE_URL);
  }
}
