import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss']
})
export class NavDropdownComponent {
  @Input() nav!: Array<any>;

  currentImageId = 'img-1';

  imagesPath = "/assets/images/components/page-header/components/nav-dropdown/images";

  constructor() { }

  changeImage(id: string) {
    this.currentImageId = id;
  }
}
