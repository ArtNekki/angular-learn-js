import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category.interface';

@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent {
	@Input() data!: ICategory;

	getImagePath(id: string) {
		return `/assets/images/content/main-nav/${id}`;
	}
}
