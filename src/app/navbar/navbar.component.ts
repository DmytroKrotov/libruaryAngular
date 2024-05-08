import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StylesService } from '../services/styles.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  darkStyle:StylesService=inject(StylesService);
  darkBackground:boolean=true;
  changeDarkStyle()
  {
    this.darkStyle.updateDarkStyle();
  }
  changeColor()
  {
    this.darkBackground==true?this.darkBackground=false:this.darkBackground=true;
  }

}
