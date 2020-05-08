import { initialState } from './security';
import { createReducer, on } from '@ngrx/store';
import {
  AuthFailure,
  ClearAuthFailure,
  ClearRegisteringFailure,
  RegisteringFailure,
  ClearCurrent
} from './security.actions';


export const securityFeatureKey = 'user';

// Reducer

const securityReducers = createReducer(
  initialState,
  on(AuthFailure, (state, { error }) => ({
    ...state,
    loginError: error
  })),
  on(ClearAuthFailure, state => ({
    ...state,
    loginError: ''
  })),
  on(RegisteringFailure, (state, { error }) => ({
    ...state,
    registerError: error
  })),
  on(ClearRegisteringFailure, state => ({
    ...state,
    registerError: ''
  })),
  on(ClearCurrent, state => ({
    ...state,
    current: null,
  })),

);

export function securityReducer(state, action) {
  return securityReducers(state, action);
}
