import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { Role } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles'] as Role[];
    const userRole = this.auth.getUserRoles();

    if (!this.auth.isLoggedIn() || !expectedRoles.includes(userRole)) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    return true;
  }
}
