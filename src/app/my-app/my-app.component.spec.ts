import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { MyAppComponent } from './my-app.component';
import { ExemplosPipesComponent } from './../exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './../camel-case.pipe';
import { DiretivaNgforComponent } from './../diretiva/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivasCustomizadasComponent } from './../diretivas-customizadas/diretivas-customizadas.component';
import { OperadorElvisComponent } from './../operador-elvis/operador-elvis.component';
import { NgContentComponent } from './../diretiva/ng-content/ng-content.component';
import { NgStyleComponent } from './../diretiva/ng-style/ng-style.component';
import { DiretivaNgclassComponent } from './../diretiva/diretiva-ngclass/diretiva-ngclass.component';
import { SwitchComponent } from './../diretiva/switch/switch.component';
import { DiretivaNgifComponent } from './../diretiva/diretiva-ngif/diretiva-ngif.component';
import { CicloComponent } from './../ciclo/ciclo.component';
import { MeuPrimeiro2Component } from './../meu-primeiro2/meu-primeiro2.component';
import { MeuPrimeiroComponent } from './../meu-primeiro/meu-primeiro.component';
import { CursosModule } from './../cursos/cursos.module';
import { DataBindComponent } from './../data-bind/data-bind.component';
import { FiltroArrayPipe } from './../filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './../filtro-array-impuro.pipe';
import { NgElseDirective } from './../shared/ng-else.directive';
import { HighlightDirective } from './../shared/highlight.directive';
import { InputPropertyComponent } from './../input-property/input-property.component';
import { OutputPropertyComponent } from './../output-property/output-property.component';
import { FundoAmareloDirective } from './../shared/fundo-amarelo.directive';

describe('MyAppComponent', () => {
  let component: MyAppComponent;
  let fixture: ComponentFixture<MyAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          MyAppComponent,
          NgElseDirective,
          HighlightDirective,
          ExemplosPipesComponent,
          CamelCasePipe,
          DiretivaNgforComponent,
          DiretivasCustomizadasComponent,
          OperadorElvisComponent,
          NgContentComponent,
          NgStyleComponent,
          DiretivaNgclassComponent,
          SwitchComponent,
          DiretivaNgifComponent,
          CicloComponent,
          MeuPrimeiroComponent,
          MeuPrimeiro2Component,
          DataBindComponent,
          FiltroArrayPipe,
          FiltroArrayImpuroPipe,
          InputPropertyComponent,
          OutputPropertyComponent,
          FundoAmareloDirective,
      ],
      imports: [
          FormsModule,
          CursosModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
