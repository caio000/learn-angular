import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    @HostBinding('style.backgroundColor') backgroundColor: string;

    @Input() color: string;

    @Input() highlightColor: string;

    @HostListener('mouseenter') onmouseenter() {
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') onmouseleave() {
        this.backgroundColor = this.color;
    }


  constructor() { }

  ngOnInit(): void {
      this.backgroundColor = this.color;
  }

}
