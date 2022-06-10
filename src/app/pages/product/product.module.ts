import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { LetModule } from 'src/app/shared/directives/let/let.module';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
	declarations: [ProductComponent],
	imports: [CommonModule, ProductRoutingModule, LetModule],
})
export class ProductModule {}
