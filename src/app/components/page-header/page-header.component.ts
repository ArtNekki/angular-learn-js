import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderComponent implements OnInit {
  mobileNavOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMobileMenu(isOpened: boolean) {
    this.mobileNavOpened = isOpened;
  }
}
