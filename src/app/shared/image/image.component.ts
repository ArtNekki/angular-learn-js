import {Component, Input, OnInit} from '@angular/core';

interface Breakpoints {
  sm?: boolean;
  md?: boolean;
  lg?: boolean;
  xl?: boolean;
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() width!: string;
  @Input() height!: string;
  @Input() maxWidth!: string;
  @Input() src!: string;
  @Input() ext = 'jpg';
  @Input() alt!: string;
  @Input() breakpoints!: Breakpoints;


  constructor() { }

  ngOnInit(): void {
  }

}
