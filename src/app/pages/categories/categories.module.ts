import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesListModule } from '../../components/categories-list/categories-list.module';

@NgModule({
	declarations: [CategoriesComponent],
	imports: [CommonModule, CategoriesListModule, CategoriesRoutingModule],
})
export class CategoriesModule {}
