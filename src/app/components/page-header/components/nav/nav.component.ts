import { Component, OnInit } from '@angular/core';
import nav from '../../nav'
import {NavItem} from "../../interfaces/navigation.interface";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  nav: Array<NavItem> = nav;
  activeItem!: NavItem | null;

  constructor() { }

  ngOnInit(): void {}

  showDropdown(item: NavItem) {
    this.activeItem = item.dropdown ? item : null;
  }

  closeDropdown() {
    this.activeItem = null;
  }

  isTargetDropdown(item: NavItem) {
    return item.dropdown && this.activeItem === item;
  }
}
