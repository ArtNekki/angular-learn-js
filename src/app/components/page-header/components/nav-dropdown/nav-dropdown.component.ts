import {Component, Input, OnInit} from '@angular/core';
import {Nav} from "../../interfaces/nav.interface";

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss']
})
export class NavDropdownComponent {
  @Input() list!: Array<any>;

  currentImageId = 'img-1';

  get imagePath() {
    return '/assets/images/content/main-nav/' + this.currentImageId;
  }

  constructor() { }

  changeImage(id: string) {
    console.log('nav', this.list);
    this.currentImageId = id;
  }
}
