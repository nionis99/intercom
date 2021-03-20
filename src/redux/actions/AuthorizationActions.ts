import React from 'react';
import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { LoginFormInputs } from 'components/Forms/LoginForm';
import { AuthActionTypes, LOGIN_LOADING } from 'redux/types/AuthTypes';
import { AUTH_URL } from 'Constants';
import authHeader from 'utils/requestHeader';

export const loginLoading = (loading: boolean): AuthActionTypes => ({ type: LOGIN_LOADING, loading });

export const login = (data: LoginFormInputs, setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => (
  dispatch: Dispatch
) => {
  dispatch(loginLoading(true));
  return axios
    .post(AUTH_URL, data)
    .then((response) => setAccessToken(response.data.token))
    .catch((error: AxiosError) => toast.error(error.response?.data || 'Error!'))
    .finally(() => dispatch(loginLoading(false)));
};

export const logout = (setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => {
  const headers = authHeader();
  return axios.delete(AUTH_URL, { headers }).finally(() => setAccessToken(null));
};
