import { createAction, props } from '@ngrx/store';
import { User } from 'firebase';

export const Current = createAction('[User] Current', props<{user: User}>());
export const ClearCurrent = createAction('[User] Clear Current');

export const Logout = createAction('[Auth] Logout');

export const Auth = createAction('[User] Auth', props<{email: string, password: string}>());
export const AuthFailure = createAction('[User] Auth Failure', props<{error: {}}>());
export const ClearAuthFailure = createAction('[User] Clear Auth Failure');

export const Registering = createAction('[User] Register', props<{email: string, password: string}>());
export const RegisteringFailure = createAction('[User] Register Failure', props<{error: {}}>());
export const ClearRegisteringFailure = createAction('[User] Clear Register Failure');
