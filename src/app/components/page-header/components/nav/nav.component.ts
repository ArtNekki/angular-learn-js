import { Component, OnInit } from '@angular/core';
import nav from '../../nav'

interface Nav {
  id?: string;
  link: string;
  name: string;
  dropdown?: Array<{id?: string; link: string; name: string}>
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  nav: Array<any> = nav;
  activeItem!: Nav | null;

  constructor() { }

  ngOnInit(): void {}

  showDropdown(item: Nav) {
    this.activeItem = item.dropdown ? item : null;
  }

  closeDropdown() {
    this.activeItem = null;
  }
}
