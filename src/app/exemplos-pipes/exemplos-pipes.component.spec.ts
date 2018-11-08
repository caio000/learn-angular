import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ExemplosPipesComponent } from './exemplos-pipes.component';
import { CamelCasePipe } from '../camel-case.pipe';
import { FiltroArrayPipe } from '../filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './../filtro-array-impuro.pipe';

describe('ExemplosPipesComponent', () => {
  let component: ExemplosPipesComponent;
  let fixture: ComponentFixture<ExemplosPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            ExemplosPipesComponent,
            CamelCasePipe,
            FiltroArrayImpuroPipe,
            FiltroArrayPipe
        ],
        imports: [
            FormsModule,
        ],
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
