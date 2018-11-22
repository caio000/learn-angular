import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ],
      providers: [ UsuarioService ]
    })
    .compileComponents().then(() => {
        fixture = TestBed.createComponent(UsuarioComponent);
        component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
