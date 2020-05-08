import { Location } from '@angular/common';
import { Router, ActivationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { tap, filter } from 'rxjs/operators';

import { RouterGo, RouterBack, RouterForward, RouteChange } from 'src/app/core/store/actions';
import { Store } from '@ngrx/store';

@Injectable()
export class Effects {
  loadingView = null;

  constructor(
    private router: Router,
    private location: Location,
    private store: Store<any>,
    private actions$: Actions,
  ) {
    this.listenToRouter();
  }

  @Effect({ dispatch: false })
  navigate$ = this.actions$.pipe(
    ofType(RouterGo),
    tap(({ path, queryParams, extras }) =>
      this.router.navigate(path, { queryParams, ...extras })
    )
  );

  @Effect({ dispatch: false })
  navigateBack$ = this.actions$.pipe(
    ofType(RouterBack),
    tap(() => this.location.back())
  );

  @Effect({ dispatch: false })
  navigateForward$ = this.actions$.pipe(
    ofType(RouterForward),
    tap(() => this.location.forward())
  );

  private listenToRouter() {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) =>
        this.store.dispatch(
          RouteChange({
            params: { ...event.snapshot.params },
            path: event.snapshot.routeConfig.path
          })
        )
      );
  }
}
