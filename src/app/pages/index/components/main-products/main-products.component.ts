import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { concatAll, first, map, take, tap } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
	selector: 'app-main-products',
	templateUrl: './main-products.component.html',
	styleUrls: ['./main-products.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainProductsComponent implements OnInit {
	readonly products$ = this.productsService.products$.pipe(
		map((products: IProduct[]) => {
			return products.splice(0, 1);
		}),
		tap((data) => {
			console.log('data', data);
		}),
	);

	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.productsService.loadProducts();
	}
}
