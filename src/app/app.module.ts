import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainGalleryModule } from './components/main-gallery/main-gallery.module';
import { PageHeaderModule } from './components/page-header/page-header.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, PageHeaderModule, MainGalleryModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
