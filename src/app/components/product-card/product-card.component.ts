import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IProduct } from '../../shared/interfaces/product.interface';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
	@Input() data!: IProduct;
}
