import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';

import { routing } from './app.routing';

import { CamelCasePipe } from './camel-case.pipe';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { DiretivaNgforComponent } from './diretiva/diretiva-ngfor/diretiva-ngfor.component';
import { NgStyleComponent } from './diretiva/ng-style/ng-style.component';
import { DiretivaNgifComponent } from './diretiva/diretiva-ngif/diretiva-ngif.component';

import { CicloComponent } from './ciclo/ciclo.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { CursosModule } from './cursos/cursos.module';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { AppComponent } from './app.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { SwitchComponent } from './diretiva/switch/switch.component';
import { DiretivaNgclassComponent } from './diretiva/diretiva-ngclass/diretiva-ngclass.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './diretiva/ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { MyAppComponent } from './my-app/my-app.component';
import { LoginComponent } from './rotas/login/login.component';
import { UsuarioComponent } from './rotas/usuario/usuario.component';
import { HomeComponent } from './rotas/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { UsuarioDetalhesComponent } from './rotas/usuario/usuario-detalhes/usuario-detalhes.component';

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
        SwitchComponent,
        DiretivaNgifComponent,
        NgStyleComponent,
        DiretivaNgclassComponent,
        DiretivaNgforComponent,
        OperadorElvisComponent,
        NgContentComponent,
        DiretivasCustomizadasComponent,
        FundoAmareloDirective,
        HighlightDirective,
        NgElseDirective,
        ExemplosPipesComponent,
        CamelCasePipe,
        FiltroArrayImpuroPipe,
        MyAppComponent,
        FiltroArrayPipe,
        LoginComponent,
        UsuarioComponent,
        HomeComponent,
        MenuComponent,
        UsuarioDetalhesComponent,
      ],
      imports: [
          FormsModule,
          CursosModule,
          routing,
      ],
      providers: [
          {
              provide: APP_BASE_HREF,
              useValue: '/',
          }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
