import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { MainProductsModule } from './components/main-products/main-products.module';
import { IndexRoutingModule } from './index-routing.module';

@NgModule({
	declarations: [IndexComponent],
	imports: [CommonModule, MainProductsModule, IndexRoutingModule],
})
export class IndexModule {}
