import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy,
  Input
} from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements
                                        OnInit,
                                        OnChanges,
                                        DoCheck,
                                        AfterViewInit,
                                        AfterViewChecked,
                                        AfterContentInit,
                                        AfterContentChecked,
                                        OnDestroy {

  @Input() valorInicial: number;

  constructor() {
      this.valorInicial = 10;
    this.log('constructor');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngOnChanges(): void {
    this.log('ngOnChanges');
  }

  ngDoCheck(): void {
    this.log('ndDoCheck');
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy(): void {
    this.log('ndOnDestroy');
  }

  log(value: any): void {
    console.log(value);
  }

}
