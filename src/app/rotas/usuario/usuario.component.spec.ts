import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of';

import { UsuarioComponent } from './usuario.component';

describe('UsuarioComponent', () => {
  let component: UsuarioComponent;
  let fixture: ComponentFixture<UsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioComponent ],
      providers: [
          {
              provide: ActivatedRoute,
              useValue: (): Observable<any> => of({id: 5}),
          }
      ]
    })
    .compileComponents().then(() => {
        const fixture = TestBed.createComponent(UsuarioComponent);
        component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
