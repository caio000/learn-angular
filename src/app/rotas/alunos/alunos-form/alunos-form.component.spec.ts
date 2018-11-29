import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs';

import { AlunosFormComponent } from './alunos-form.component';
import { AlunosService } from './../alunos.service';

describe('AlunosFormComponent', () => {
  let component: AlunosFormComponent;
  let fixture: ComponentFixture<AlunosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosFormComponent ],
      imports: [
          FormsModule,
          RouterTestingModule.withRoutes([]),
      ],
      providers: [
          AlunosService,
          {
              provide: ActivatedRoute,
              useValue: { params: Observable.of({id: 1}) }
          }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should receive a correct object', () => {
      const aluno = { id: 1, name: 'aluno 01', email: 'aluno01@teste.com' };
      expect(component.aluno).toEqual(aluno);
  });
});
