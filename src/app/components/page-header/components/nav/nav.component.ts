import { Component, OnInit } from '@angular/core';
import nav from '../../nav'
import {Nav} from "../../interfaces/nav";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  nav: Array<Nav> = nav;
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
