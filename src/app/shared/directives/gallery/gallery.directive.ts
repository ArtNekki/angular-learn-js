import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[appGallery]',
})
export class GalleryDirective implements OnInit {
	constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {}

	ngOnInit(): void {
		console.log('this.viewContainer', this.viewContainer);
	}
}
