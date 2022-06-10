import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list.component';
import { CategoryModule } from '../category/category.module';
import { ButtonModule } from '../button/button.module';
import { LoaderModule } from '../loader/loader.module';
import { LetModule } from '../../shared/directives/let/let.module';

@NgModule({
	declarations: [CategoriesListComponent],
	imports: [CommonModule, CategoryModule, ButtonModule, LoaderModule, LetModule],
	exports: [CategoriesListComponent],
})
export class CategoriesListModule {}
