import React from 'react';
import { Dispatch } from 'redux';
import axios, { AxiosResponse } from 'axios';

import apiAction, { ApiMethodEnums } from 'redux/actions/API';
import authHeader from 'utils/requestHeader';
import { AuthActionTypes, LOGIN_LOADING, USER_LOADING } from 'redux/types/AuthTypes';
import { AUTH_URL, USER_URL } from 'Constants';
import { LoginFormInputs } from 'components/Forms/LoginForm';
import User from 'types/User';

export const loginLoading = (loading: boolean): AuthActionTypes => ({ type: LOGIN_LOADING, loading });
export const getUserLoading = (loading: boolean): AuthActionTypes => ({ type: USER_LOADING, loading });

export const login = (data: LoginFormInputs, setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => (
  dispatch: Dispatch
) => {
  dispatch(loginLoading(true));
  const dispatchSuccess = (response: AxiosResponse) => setAccessToken(response.data.token);
  const dispatchLoading = () => dispatch(loginLoading(false));
  return apiAction(AUTH_URL, ApiMethodEnums.POST, dispatchSuccess, dispatchLoading, data);
};

export const logout = async (
  setAccessToken: React.Dispatch<React.SetStateAction<string | null>>,
  setUser: React.Dispatch<React.SetStateAction<User | null>>
) => {
  const headers = await authHeader();
  return axios.delete(AUTH_URL, { headers }).finally(() => {
    setAccessToken(null);
    setTimeout(() => setUser(null));
  });
};

export const getUser = (setUser: React.Dispatch<React.SetStateAction<User | null>>) => (dispatch: Dispatch) => {
  dispatch(getUserLoading(true));
  const dispatchSuccess = (response: AxiosResponse) => setUser(response.data);
  const dispatchLoading = () => dispatch(getUserLoading(false));
  return apiAction(USER_URL, ApiMethodEnums.GET, dispatchSuccess, dispatchLoading);
};
