import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from './../rotas/login/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router,
    ) { }

    canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot): Observable<boolean> | boolean {
        let result = false;

        if (this.authService.isUsuarioAutenticado()) {
            result = true;
        } else {
            this.router.navigate(['/login']);
        }

        return result;
    }
}
