import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
    selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
    @HostBinding('style.backgroundColor') backgroundColor: string;

    @HostListener('mouseenter') onmouseover() {
        // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
        this.backgroundColor = 'yellow';
    }

    @HostListener('mouseleave') onmouseleave() {
        console.log('---');
        // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
        this.backgroundColor = 'white';
    }

    constructor(
        // private _elementRef: ElementRef,
        // private _renderer: Renderer
    ) {
        this.backgroundColor = 'green';
    }
}
