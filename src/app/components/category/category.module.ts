import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { ImageModule } from '../image/image.module';
import { ButtonModule } from '../button/button.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [CategoryComponent],
	imports: [CommonModule, ImageModule, ButtonModule, HttpClientModule, RouterModule],
	exports: [CategoryComponent],
})
export class CategoryModule {}
