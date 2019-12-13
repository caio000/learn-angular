import { Directive, ElementRef, Renderer, Renderer2 } from '@angular/core';

@Directive({
    selector: 'p[appFundoAmarelo]' // essa diretiva só pode ser utilizadas por tags P
})
export class FundoAmareloDirective {
    constructor(
        private _elementRef: ElementRef,
        private _renderer: Renderer2,
    ) {
        // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
        this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
        // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    }
}
