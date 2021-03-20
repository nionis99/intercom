import { AuthActionTypes, AuthorizationStateType, LOGIN_ERROR, LOGIN_LOADING } from 'redux/types/UserTypes';

const initialStateAuth: AuthorizationStateType = {
  error: null,
  loading: false,
};

export const AuthReducer = (state = initialStateAuth, action: AuthActionTypes): AuthorizationStateType => {
  switch (action.type) {
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
