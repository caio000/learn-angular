import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { AppComponent } from './app.component';

// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { UsuarioModule } from './rotas/usuario/usuario.module';

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
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { MyAppComponent } from './my-app/my-app.component';
import { LoginComponent } from './rotas/login/login.component';
import { HomeComponent } from './rotas/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';


registerLocaleData(localePt);

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
    NgElseDirective,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe,
    MyAppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    FormsModule,
    UsuarioModule,
    AppRoutingModule
  ],
  providers: [
      LogService,
      {
          provide: LOCALE_ID,
          useValue: 'pt',
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
