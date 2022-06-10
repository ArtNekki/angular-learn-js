import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { map, Observable, tap } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
	selector: 'app-catalog',
	templateUrl: './catalog.component.html',
	styleUrls: ['./catalog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent implements OnInit {
	products$: Observable<IProduct[]> = this.productsService.products$;
	productsLastSeen$ = this.products$.pipe(
		map((arr: IProduct[]) => {
			return arr.splice(0, 4);
		}),
	);

	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.productsService.loadProducts();
	}
}
