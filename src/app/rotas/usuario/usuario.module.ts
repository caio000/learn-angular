import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';
import { UsuarioService } from './usuario.service';

@NgModule({
  imports: [
      CommonModule,
      RouterModule
  ],
  declarations: [
      UsuarioComponent,
      UsuarioDetalhesComponent,
  ],
  providers: [
      UsuarioService
  ]
})
export class UsuarioModule { }
