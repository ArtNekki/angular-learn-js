import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import nav from '../../nav';
import { NavItem } from '../../interfaces/navigation.interface';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
	nav: Array<NavItem> = nav;
	activeItem!: NavItem | null;

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
