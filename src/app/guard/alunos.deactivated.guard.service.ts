import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs';

import { IFormDeactivate } from './iform.deactivate';

@Injectable()
export class AlunosDeactivatedGuard implements CanDeactivate<IFormDeactivate> {

    canDeactivate(
        component: IFormDeactivate,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        return component.podeDesativar();
    }

}
