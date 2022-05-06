import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [PageHeaderComponent, NavComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule { }
