import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
	color: ThemePalette = 'primary';
	mode: ProgressSpinnerMode = 'determinate';
	value = 50;
}
