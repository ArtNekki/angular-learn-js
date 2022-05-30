import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductCardModule } from '../product-card/product-card.module';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
	declarations: [ProductsComponent],
	imports: [CommonModule, ProductCardModule, LoaderModule],
	exports: [ProductsComponent],
})
export class ProductsModule {}
