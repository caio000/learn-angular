import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleComponent } from './ng-style.component';
import { FormsModule } from '@angular/forms';

describe('NgStyleComponent', () => {
  let component: NgStyleComponent;
  let fixture: ComponentFixture<NgStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleComponent ],
      imports: [
          FormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
