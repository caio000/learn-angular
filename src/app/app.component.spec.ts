import { CursosComponent } from './cursos/cursos.component';
import { FormsModule } from '@angular/forms';
import { CicloComponent } from './ciclo/ciclo.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MeuPrimeiroComponent,
        MeuPrimeiro2Component,
        DataBindComponent,
        CicloComponent,
        InputPropertyComponent,
        OutputPropertyComponent,
      ],
      imports: [
          FormsModule,
          CursosModule,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'primeiro-projeto'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('primeiro-projeto');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to primeiro-projeto!');
  }));
});
