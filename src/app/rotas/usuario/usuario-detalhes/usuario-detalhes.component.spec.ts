import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { UsuarioDetalhesComponent } from './usuario-detalhes.component';
import { UsuarioService } from './../usuario.service';


describe('UsuarioDetalhesComponent', () => {
  let component: UsuarioDetalhesComponent;
  let fixture: ComponentFixture<UsuarioDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioDetalhesComponent ],
      imports: [
          RouterTestingModule.withRoutes([]),
      ],
      providers: [
          UsuarioService,
      ]
    })
    .compileComponents().then(() => {
        fixture = TestBed.createComponent(UsuarioDetalhesComponent);
        component = fixture.componentInstance;
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(UsuarioDetalhesComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
