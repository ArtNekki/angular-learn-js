import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header.component';
import { NavComponent } from './components/nav/nav.component';
import { TopBannerComponent } from './components/top-banner/top-banner.component';
import { NavDropdownComponent } from './components/nav-dropdown/nav-dropdown.component';
import { MobileNavComponent } from './components/mobile-nav/mobile-nav.component';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '../button/button.module';
import { ImageModule } from '../image/image.module';

@NgModule({
	declarations: [PageHeaderComponent, NavComponent, TopBannerComponent, NavDropdownComponent, MobileNavComponent],
	imports: [CommonModule, IconModule, ButtonModule, ImageModule],
	exports: [PageHeaderComponent],
})
export class PageHeaderModule {}
