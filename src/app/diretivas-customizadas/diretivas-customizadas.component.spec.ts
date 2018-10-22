import { HighlightDirective } from './../shared/highlight.directive';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasCustomizadasComponent } from './diretivas-customizadas.component';
import { FundoAmareloDirective } from '../shared/fundo-amarelo.directive';
import { HighlightMouseDirective } from '../shared/highlight-mouse.directive';
import { NgElseDirective } from '../shared/ng-else.directive';

describe('DiretivasCustomizadasComponent', () => {
  let component: DiretivasCustomizadasComponent;
  let fixture: ComponentFixture<DiretivasCustomizadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            DiretivasCustomizadasComponent,
            HighlightDirective,
            NgElseDirective,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasCustomizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
