import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs';

import { AlunosFormComponent } from './../rotas/alunos/alunos-form/alunos-form.component';

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<AlunosFormComponent> {

    canDeactivate(
        component: AlunosFormComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return component.sairDoFormulario();
    }

}
