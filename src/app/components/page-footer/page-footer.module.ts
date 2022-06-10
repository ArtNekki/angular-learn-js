import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageFooterComponent } from './page-footer.component';
import { LinkModule } from '../link/link.module';
import { SocialComponent } from './social/social.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
	declarations: [PageFooterComponent, SocialComponent],
	imports: [CommonModule, LinkModule, IconModule],
	exports: [PageFooterComponent],
})
export class PageFooterModule {}
