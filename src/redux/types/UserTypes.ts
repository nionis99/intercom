import { Maybe } from 'types';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_LOADING = 'LOGIN_LOADING';

export interface AuthorizationStateType {
  error: Maybe<string>;
  loading: boolean;
}

interface LoginErrorActionType {
  type: typeof LOGIN_ERROR;
  error: Maybe<string>;
}

interface LoginLoadingActionType {
  type: typeof LOGIN_LOADING;
  loading: boolean;
}

export type AuthActionTypes = LoginErrorActionType | LoginLoadingActionType;
