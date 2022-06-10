import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProductsComponent } from './main-products.component';
import { GalleryModule } from 'src/app/shared/directives/gallery/gallery.module';
import { ButtonModule } from 'src/app/components/button/button.module';
import { ImageModule } from 'src/app/components/image/image.module';
import { LetModule } from 'src/app/shared/directives/let/let.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [MainProductsComponent],
	imports: [CommonModule, GalleryModule, ButtonModule, ImageModule, LetModule, LoaderModule],
	exports: [MainProductsComponent],
})
export class MainProductsModule {}
