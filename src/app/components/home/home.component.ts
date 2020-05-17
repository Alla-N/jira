import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  search: string;
  opened: false;

  constructor(){}

  @ViewChild('sidenav') sidenav: MatSidenav;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 500) {
      this.sidenav.mode = 'over';
    } else {
      this.sidenav.mode = 'side';
    }
  }

  onSearch(search: string): void {
    this.search = search;
    console.log('Search from app - ', this.search);
  }

}
