import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosService } from './cursos.service';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CriarCursoComponent } from "./criar-curso/criar-curso.component";

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ CursosComponent, CursoDetalheComponent, CriarCursoComponent ],
        providers: [ CursosService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
