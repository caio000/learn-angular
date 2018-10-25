import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// importando components
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { DataBindComponent } from './data-bind/data-bind.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

// importando um novo modulo
import { CursosModule } from './cursos/cursos.module';
import { DiretivaNgifComponent } from './diretiva/diretiva-ngif/diretiva-ngif.component';
import { SwitchComponent } from './diretiva/switch/switch.component';
import { DiretivaNgforComponent } from './diretiva/diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgclassComponent } from './diretiva/diretiva-ngclass/diretiva-ngclass.component';
import { NgStyleComponent } from './diretiva/ng-style/ng-style.component';
import { OperadorElvisComponent } from './operador-elvis/operador-elvis.component';
import { NgContentComponent } from './diretiva/ng-content/ng-content.component';
import { FundoAmareloDirective } from './shared/fundo-amarelo.directive';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas/diretivas-customizadas.component';
import { HighlightMouseDirective } from './shared/highlight-mouse.directive';
import { HighlightDirective } from './shared/highlight.directive';
import { NgElseDirective } from './shared/ng-else.directive';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,
    DataBindComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    CicloComponent,
    DiretivaNgifComponent,
    SwitchComponent,
    DiretivaNgforComponent,
    DiretivaNgclassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective,
    HighlightDirective,
    NgElseDirective
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
  ],
  providers: [
      LogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
