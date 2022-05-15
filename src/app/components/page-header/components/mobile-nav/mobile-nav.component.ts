import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import nav from '../../nav'
import {NavItem} from "../../interfaces/navigation.interface";

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileNavComponent {
  nav: Array<NavItem> = nav;
  activeItem!: NavItem | null;

  toggleDropdown(item: NavItem) {
    if (!item.dropdown) {
      return;
    }

    this.activeItem = !this.activeItem ? item : null;
  }
}
