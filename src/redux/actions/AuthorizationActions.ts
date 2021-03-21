import React from 'react';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import { AuthActionTypes, LOGIN_LOADING } from 'redux/types/AuthTypes';
import { LoginFormInputs } from 'components/Forms/LoginForm';
import apiAction from './apiAction';
import authHeader from 'utils/requestHeader';
import { AUTH_URL } from 'Constants';

export const loginLoading = (loading: boolean): AuthActionTypes => ({ type: LOGIN_LOADING, loading });

export const login = (data: LoginFormInputs, setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => (
  dispatch: Dispatch
) => {
  dispatch(loginLoading(true));
  const dispatchSuccess = (response: AxiosResponse) => setAccessToken(response.data.token);
  return apiAction(AUTH_URL, 'POST', dispatchSuccess, dispatch(loginLoading(false)), data);
};

export const logout = (setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => {
  const headers = authHeader();
  return axios.delete(AUTH_URL, { headers }).finally(() => setAccessToken(null));
};
