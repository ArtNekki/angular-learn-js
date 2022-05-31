import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { LetModule } from 'src/app/shared/directives/let/let.module';
import { ProductCardModule } from '../../components/product-card/product-card.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { ProductsModule } from '../../components/products/products.module';

@NgModule({
	declarations: [CatalogComponent],
	imports: [
		CommonModule,
		CatalogRoutingModule,
		ButtonModule,
		LetModule,
		ProductCardModule,
		LoaderModule,
		ProductsModule,
	],
})
export class CatalogModule {}
