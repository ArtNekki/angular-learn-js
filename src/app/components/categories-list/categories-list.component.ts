import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { ICategory } from '../../shared/interfaces/category.interface';

const Categories = [
	{ id: 'id-3', imgId: 'img-1', link: '/page-1', name: 'Накладные электронные замки' },
	{ id: 'id-4', imgId: 'img-2', link: '/page-2', name: 'Замки для квартиры' },
	{ id: 'id-5', imgId: 'img-3', link: '/page-3', name: 'Замки для дома' },
	{ id: 'id-6', imgId: 'img-4', link: '/page-4', name: 'Замки для отелей' },
	{ id: 'id-7', imgId: 'img-5', link: '/page-5', name: 'Замки для офиса' },
	{ id: 'id-8', imgId: 'img-6', link: '/page-6', name: 'Замки для шкафчиков' },
	{ id: 'id-9', imgId: 'img-7', link: '/page-7', name: 'Замки для раздевалок' },
];

@Component({
	selector: 'app-categories-list',
	templateUrl: './categories-list.component.html',
	styleUrls: ['./categories-list.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent {
	categories$: Observable<ICategory[]> = of(Categories).pipe(
		map((arr: ICategory[]) => {
			return arr.splice(0, 4);
		}),
	);
}
