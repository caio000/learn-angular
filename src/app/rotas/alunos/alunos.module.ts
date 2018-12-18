import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosService } from './alunos.service';

import { CursosGuard } from './../../guard/cursos.guard.service';
import { AlunosDeactivatedGuard } from './../../guard/alunos.deactivated.guard.service';

@NgModule({
  imports: [
      AlunosRoutingModule,
      FormsModule,
      CommonModule
  ],
  declarations: [
      AlunosComponent,
      AlunosFormComponent,
      AlunosDetalhesComponent
  ],
  providers: [
      AlunosService,
      CursosGuard,
      AlunosDeactivatedGuard,
  ]
})
export class AlunosModule { }
