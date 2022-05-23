import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-top-banner',
	templateUrl: './top-banner.component.html',
	styleUrls: ['./top-banner.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBannerComponent {}
