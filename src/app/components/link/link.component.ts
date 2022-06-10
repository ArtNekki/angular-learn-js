import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-link',
	templateUrl: './link.component.html',
	styleUrls: ['./link.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
	@Input() size!: string;
	@Input() color!: string;
	@Input() type!: string;
	@Input() linkIn!: string;
	@Input() icon!: string;
	@Input() blank!: string;
	@Input() href!: string;

	setClass() {
		return {
			['link_size_' + this.size]: this.size,
			['link_color_' + this.color]: this.color,
			['link_type_' + this.type]: this.type,
			['link_in_' + this.linkIn]: this.linkIn,
			['link_with_icon']: this.icon,
		};
	}
}
