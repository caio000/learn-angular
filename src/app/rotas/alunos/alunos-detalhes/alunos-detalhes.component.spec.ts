import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

import { AlunosDetalhesComponent } from './alunos-detalhes.component';
import { AlunosService } from './../alunos.service';

describe('AlunosDetalhesComponent', () => {
  let component: AlunosDetalhesComponent;
  let fixture: ComponentFixture<AlunosDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlunosDetalhesComponent ],
      imports: [
          RouterTestingModule.withRoutes([])
      ],
      providers: [
          AlunosService,
          {
              provide: ActivatedRoute,
              useValue: {
                  params: Observable.of({ 'id': 1 })
              }
          },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
