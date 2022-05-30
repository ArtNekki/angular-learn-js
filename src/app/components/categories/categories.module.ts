import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { CategoryModule } from '../category/category.module';
import { ButtonModule } from '../button/button.module';
import { LoaderModule } from '../loader/loader.module';
import { LetModule } from '../../shared/directives/let/let.module';

@NgModule({
	declarations: [CategoriesComponent],
	imports: [CommonModule, CategoryModule, ButtonModule, LoaderModule, LetModule],
	exports: [CategoriesComponent],
})
export class CategoriesModule {}
