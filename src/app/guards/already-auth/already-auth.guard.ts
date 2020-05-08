import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { AuthService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root'
})
export class AlreadyAuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkIfAlreadyLogin();
  }

  async checkIfAlreadyLogin(): Promise<boolean> {
    const user = await this.authService.isSessionStillAvailable();
    if (user) { // already logged in, so redirect it to products
      this.router.navigate(['products']);
      return false;
    } else {
      return true;
    }
  }
}
