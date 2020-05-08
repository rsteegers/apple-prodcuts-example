import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLogin();
  }

  async checkLogin(): Promise<boolean> {
    const user = await this.authService.isSessionStillAvailable();
    if (user) {
      return true;
    } else {
      this.router.navigate(['security/login']);
      return false;
    }
  }

}
