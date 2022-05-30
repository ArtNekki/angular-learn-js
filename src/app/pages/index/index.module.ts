import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { MainProductsModule } from './components/main-products/main-products.module';
import { IndexRoutingModule } from './index-routing.module';
import { IconModule } from 'src/app/components/icon/icon.module';
import { CategoryModule } from 'src/app/components/category/category.module';
import { LetModule } from 'src/app/shared/directives/let/let.module';
import { LoaderModule } from 'src/app/components/loader/loader.module';

@NgModule({
	declarations: [IndexComponent],
	imports: [
		CommonModule,
		MainProductsModule,
		IndexRoutingModule,
		IconModule,
		CategoryModule,
		LetModule,
		LoaderModule,
	],
})
export class IndexModule {}
