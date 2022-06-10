import { Injectable } from '@angular/core';
import { ProductsApiService } from './products-api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from '../../interfaces/product.interface';

@Injectable({
	providedIn: 'root',
})
export class ProductsService {
	readonly _products$ = new BehaviorSubject<IProduct[]>([]);

	get products$(): Observable<IProduct[]> {
		return this._products$.asObservable();
	}

	constructor(private productsApiService: ProductsApiService) {}

	// от этого subscribe нужна отписка?
	loadProducts() {
		this.productsApiService.getProducts().subscribe((products: IProduct[]) => {
			this._products$.next(products);
		});
	}

	// от этого subscribe нужна отписка?
	loadProduct(id: string) {
		this.productsApiService.getProduct(id).subscribe((product: IProduct) => {
			this._products$.next([...this._products$.value.filter(({ _id }) => _id !== id), product]);
		});
	}
}
