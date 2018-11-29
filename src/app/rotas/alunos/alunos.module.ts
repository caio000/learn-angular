import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos.routing.module';

import { AlunosComponent } from './alunos.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosService } from './alunos.service';

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
      AlunosService
  ]
})
export class AlunosModule { }
