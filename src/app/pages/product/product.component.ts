import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';
import { map, Observable, switchMap, tap } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/shared/services/products/products.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
	product$!: Observable<unknown>;

	constructor(
		private productsService: ProductsService,
		private router: Router,
		private activatedRoute: ActivatedRoute,
	) {}

	ngOnInit(): void {
		this.product$ = this.activatedRoute.paramMap.pipe(
			map((paramMap: ParamMap) => paramMap.get('id') as string),
			tap((id: string) => {
				this.productsService.loadProduct(id);
			}),
			switchMap((id) =>
				this.productsService.products$.pipe(
					map((products) => products?.find(({ _id }: IProduct) => _id === id)),
				),
			),
		);
	}
}
