import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuardService } from './auth.guard.service';
import { AuthService } from './../rotas/login/auth.service';

describe('Auth.GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule.withRoutes([]),
        ],
        providers: [AuthGuardService, AuthService ]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
