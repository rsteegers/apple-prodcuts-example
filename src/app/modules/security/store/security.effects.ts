import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {
  map,
  switchMap,
  tap,
  catchError,
  mergeMap
} from 'rxjs/operators';

import { AuthService } from 'src/app/core/services';
import {
  Auth,
  Current,
  ClearCurrent,
  AuthFailure,
  Logout,
  Registering,
  RegisteringFailure,
} from './security.actions';

import { RouterGo } from 'src/app/core/store/actions';
import { Router } from '@angular/router';

@Injectable()
export class SecurityEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  @Effect()
  auth$ = this.actions$.pipe(
    ofType(Auth),
    switchMap(action =>
      this.authService.doLogin(action).pipe(
        mergeMap(user => [
          Current(user),
          RouterGo({ path: ['/products'] }),
        ]),
        catchError(error => {
          return of(
            AuthFailure({ error: 'User name or Password invalid!' }),
          );
        })
      )
    )
  );

  @Effect({ dispatch: false })
  logout$ = this.actions$.pipe(
    ofType(Logout),
    map(() => this.authService.doLogout().pipe(
      mergeMap(() => [
        ClearCurrent(),
      ])
    )),
    tap(() => this.router.navigate(['/security/login'], {}))
  );

  @Effect()
  register$ = this.actions$.pipe(
    ofType(Registering),
    switchMap(action =>
      this.authService.doRegister(action).pipe(
        mergeMap(() => [
          RouterGo({path: ['/products']}),
        ]),
        catchError((err) => {
          console.log('error', err);
          
          if (err.code !== 'auth/email-already-in-use') {
            return of(
              RegisteringFailure({
                error: 'Account already exists or your email is incorrect'
              }),
            );
          } else {
            return of(RouterGo({path: ['/products']}));
          }
        })
      )
    )
  );
}
