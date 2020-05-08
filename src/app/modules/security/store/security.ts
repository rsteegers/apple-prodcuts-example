import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from 'firebase';

// Entity adapters
export const securityAdapter = createEntityAdapter<User>();
export interface State {
  current: User;
  loginError: string;
  registerError: string;
}

// Default / initial state
const defaultSecurity = {
  current: {} as User,
  loginError: '',
  registerError: '',
};

export const initialState: State = {...defaultSecurity};

// Selectors
export const getSecurityState = createFeatureSelector<State>('user');

export const getCurrentUser = () =>
  createSelector(
    getSecurityState,
    state => state.current
  );

export const getLoginError = () =>
  createSelector(
    getSecurityState,
    state => state.loginError
  );
export const getRegisterError = () =>
  createSelector(
    getSecurityState,
    state => state.registerError
  );
