import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

export const apiAction = (
  url: string,
  method: Method,
  headers: Headers,
  data: Body,
  dispatchSuccess: (dispatch: AxiosResponse) => Promise<void | string | number>,
  dispatchLoading: (dispatch: Dispatch) => Promise<void | string | number>
) =>
  axios
    .request({ url, method, headers, data })
    .then(dispatchSuccess)
    .catch((error) => checkError(error))
    .finally(() => dispatchLoading);

const checkError = (error: AxiosError) => {
  if (error.response) {
    const { status, data: errorMessage } = error.response;
    if (status === 401) removeAccess();
    else if (status >= 500) window.location.href = '/maintenance';
    else toast.error(errorMessage || 'Error!');
  }
};

const removeAccess = () => {
  localStorage.setItem('accessToken', (null as unknown) as string);
  window.location.href = '/login';
};
