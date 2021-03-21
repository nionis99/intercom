import axios, { AxiosError, AxiosResponse, Method } from 'axios';
import { toast } from 'react-toastify';
import authHeader from 'utils/requestHeader';

const apiAction = <D, L, S>(
  url: string,
  method: Method,
  dispatchSuccess: (response: AxiosResponse) => S,
  dispatchLoading: () => L,
  data?: D
) => {
  const headers = authHeader();
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
