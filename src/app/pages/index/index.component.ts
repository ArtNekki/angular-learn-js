import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ICategory } from '../../shared/interfaces/category.interface';
import { map, Observable, of } from 'rxjs';
import { ProductsService } from 'src/app/shared/services/products/products.service';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent implements OnInit {
	products$: Observable<IProduct[]> = this.productsService.products$;

	constructor(private productsService: ProductsService) {}

	ngOnInit(): void {
		this.productsService.loadProducts();
	}
}
