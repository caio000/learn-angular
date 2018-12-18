import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CursosGuard } from './../../guard/cursos.guard.service';

import { AlunosComponent } from './alunos.component';
import { AlunosDetalhesComponent } from './alunos-detalhes/alunos-detalhes.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';


const ALUNOS_ROUTING = [
    { path: '', component: AlunosComponent, canActivateChild: [ CursosGuard ], children: [
        { path: 'novo', component: AlunosFormComponent },
        { path: ':id', component: AlunosDetalhesComponent },
        { path: ':id/editar', component: AlunosFormComponent },
    ] },
];

@NgModule({
    imports: [
        RouterModule.forChild(ALUNOS_ROUTING)
    ],
    exports: [ RouterModule ]
})
export class AlunosRoutingModule { }
