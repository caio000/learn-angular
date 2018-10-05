import { OutputPropertyComponent } from './../output-property/output-property.component';
import { CursosModule } from './../cursos/cursos.module';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindComponent } from './data-bind.component';
import { InputPropertyComponent } from '../input-property/input-property.component';

describe('DataBindComponent', () => {
  let component: DataBindComponent;
  let fixture: ComponentFixture<DataBindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ DataBindComponent, OutputPropertyComponent, InputPropertyComponent ],
        imports: [ FormsModule, CursosModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
