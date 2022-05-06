import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopBannerComponent } from './components/top-banner/top-banner.component';



@NgModule({
  declarations: [PageHeaderComponent, NavComponent, TopBannerComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule { }
