import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {NavItem} from "../../interfaces/navigation.interface";

@Component({
  selector: 'app-nav-dropdown',
  templateUrl: './nav-dropdown.component.html',
  styleUrls: ['./nav-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDropdownComponent {
  @Input() list!: Array<NavItem>;

  currentImageId: string | undefined = 'img-1';

  get imagePath() {
    return '/assets/images/content/main-nav/' + this.currentImageId;
  }

  changeImage(id?: string) {
    this.currentImageId = id;
  }
}
