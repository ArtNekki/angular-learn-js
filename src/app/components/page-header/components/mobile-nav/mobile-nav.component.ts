import { Component, OnInit } from '@angular/core';
import nav from '../../nav'
import {Nav} from "../../interfaces/nav";

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  nav: Array<Nav> = nav;
  activeItem!: Nav | null;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(item: Nav) {
    if (!item.dropdown) {
      return;
    }

    this.activeItem = !this.activeItem ? item : null;
  }
}
