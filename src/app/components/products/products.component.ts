import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from 'src/app/shared/interfaces/product.interface';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
	@Input() title!: string;
	@Input() list!: IProduct[];
}
