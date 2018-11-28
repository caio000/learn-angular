import { ModuleWithProviders, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComponent } from './usuario.component';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';

const USUARIO_ROUTES: Routes = [
    { path: 'usuarios/:id', component: UsuarioDetalhesComponent },
    { path: 'usuarios', component: UsuarioComponent },
];


@NgModule({
    imports: [RouterModule.forChild(USUARIO_ROUTES)],
    exports: [RouterModule]
})
export class UsuarioRoutingModule { }
