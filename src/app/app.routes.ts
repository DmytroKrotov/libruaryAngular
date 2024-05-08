import { Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { ReviewsComponent } from './reviews/reviews.component';


export const routes: Routes = [
    {'path':'',component:BooksComponent},
    {'path':'authors',component:AuthorsComponent},
    {'path':'reviews',component:ReviewsComponent},
    
];
