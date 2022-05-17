import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { NavComponent } from './components/nav/nav.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { NavDropdownComponent } from './components/nav-dropdown/nav-dropdown.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';



@NgModule({
  declarations: [PageHeaderComponent, NavComponent, TopBannerComponent, NavDropdownComponent, MobileNavComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    PageHeaderComponent
  ]
})
export class PageHeaderModule { }
