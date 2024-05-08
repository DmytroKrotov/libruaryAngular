import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {
  darkStyleSignal=signal<boolean>(true);
  constructor() { }
  updateDarkStyle()
  {
    this.darkStyleSignal.update((value)=>(value===true?false:true));
  }
 
  
}
