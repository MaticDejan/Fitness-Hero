import { TestBed } from '@angular/core/testing';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let activatedRouteSnapshot: ActivatedRouteSnapshot;
  let routerStateSnapshot: RouterStateSnapshot;

  beforeEach(() => {
    authService = jasmine.createSpyObj<AuthService>('AuthService', ['isLoggedIn']);
    router = jasmine.createSpyObj<Router>('Router', ['navigate']);

    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }
      ]
    });

    guard = TestBed.inject(AuthGuard);
    activatedRouteSnapshot = new ActivatedRouteSnapshot();
    routerStateSnapshot = { url: '/test-url' } as RouterStateSnapshot;
  });

  it('should allow activation when user is logged in', () => {

    const canActivate = guard.canActivate(activatedRouteSnapshot, routerStateSnapshot);

    expect(canActivate).toBe(true);
    expect(router.navigate).not.toHaveBeenCalled();
  });
});
