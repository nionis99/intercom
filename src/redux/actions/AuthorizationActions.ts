import React from 'react';
import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { LoginFormInputs } from 'components/Forms/LoginForm';
import { AuthActionTypes, LOGIN_LOADING } from 'redux/types/AuthTypes';
import { LOGIN_URL } from 'Constants';

export const loginLoading = (loading: boolean): AuthActionTypes => ({ type: LOGIN_LOADING, loading });

export const login = (data: LoginFormInputs, setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => (
  dispatch: Dispatch
) => {
  dispatch(loginLoading(true));
  return axios
    .post(LOGIN_URL, data)
    .then((response) => saveAccessToken(response.data.token, setAccessToken))
    .catch((error: AxiosError) => toast.error(error.response?.data || 'Error!'))
    .finally(() => dispatch(loginLoading(false)));
};

const saveAccessToken = (token: string, setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => {
  setAccessToken(token);
  localStorage.setItem('accessToken', token);
};
