import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

import { CursosService } from './cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CursosComponent, CursoDetalheComponent, CriarCursoComponent],
  exports: [
    CursosComponent,
  ],
  providers: [
    CursosService,
  ],
})
export class CursosModule { }
