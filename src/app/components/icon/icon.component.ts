import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-icon',
	templateUrl: './icon.component.html',
	styleUrls: ['./icon.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
	@Input() name?: string;
	@Input() size?: string;
	@Input() color?: string;

	setClass() {
		return {
			[`icon_size_${this.size}`]: this.size,
			[`icon_name_${this.name}`]: this.name,
			[`icon_color_${this.color}`]: this.color,
		};
	}
}
