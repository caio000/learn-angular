import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemplosPipesComponent } from './exemplos-pipes.component';
import { CamelCasePipe } from '../camel-case.pipe';

describe('ExemplosPipesComponent', () => {
  let component: ExemplosPipesComponent;
  let fixture: ComponentFixture<ExemplosPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            ExemplosPipesComponent,
            CamelCasePipe,
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExemplosPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
