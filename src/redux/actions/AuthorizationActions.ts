import React from 'react';
import { Dispatch } from 'redux';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { LoginFormInputs } from 'components/Forms/LoginForm';
import { AuthActionTypes, LOGIN_LOADING } from 'redux/types/UserTypes';
import { LOGIN_URL } from 'Constants';

export function loginLoading(loading: boolean): AuthActionTypes {
  return { type: LOGIN_LOADING, loading };
}

export function login(data: LoginFormInputs, setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) {
  return function (dispatch: Dispatch) {
    dispatch(loginLoading(true));
    return axios
      .post(LOGIN_URL, data)
      .then((response) => saveAccessToken(response.data.token, setAccessToken))
      .catch((error: AxiosError) => toast.error(error.response?.data || 'Error!'))
      .finally(() => dispatch(loginLoading(false)));
  };
}

const saveAccessToken = (token: string, setAccessToken: React.Dispatch<React.SetStateAction<string | null>>) => {
  setAccessToken(token);
  localStorage.setItem('accessToken', token);
};
