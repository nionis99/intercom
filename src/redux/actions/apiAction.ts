import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { toast } from 'react-toastify';
import authHeader from 'utils/requestHeader';

export enum ApiMethodEnums {
  POST = 'POST',
  GET = 'GET',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const apiAction = async <D, L, S>(
  url: string,
  method: ApiMethodEnums,
  dispatchSuccess: (response: AxiosResponse) => S,
  dispatchLoading: () => L,
  data?: D
) => {
  const headers = authHeader();
  console.log(headers);
  return axios
    .request({ url, method, headers, data })
    .then(dispatchSuccess)
    .catch(handleError)
    .finally(dispatchLoading);
};

const handleError = (error: AxiosError) => {
  if (error.response) {
    const { status, data: errorMessage } = error.response;
    if (status === 401) removeAccess();
    else if (status >= 500) window.location.href = '/server';
    else toast.error(errorMessage || 'Error!');
  }
};

const removeAccess = () => {
  localStorage.setItem('accessToken', (null as unknown) as string);
  window.location.href = '/login';
};

export default apiAction;
