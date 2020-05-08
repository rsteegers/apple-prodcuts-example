import { props, createAction } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';


/* ROUTE ACTIONS */
export const RouterGo = createAction(
  '[Router] Go',
  props<{
    path: any[];
    queryParams?: object;
    extras?: NavigationExtras;
  }>()
);

export const RouterBack = createAction('[Router] Back');
export const RouterForward = createAction('[Router] Forward');
export const RouteChange = createAction(
  '[Router] Route Change',
  props<{ params: any; path: string }>()
);
