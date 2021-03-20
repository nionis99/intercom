import axios, { Method } from 'axios';
import { toast } from 'react-toastify';
import { Dispatch } from 'redux';

export const apiAction = (
  url: string,
  method: Method,
  headers: Headers,
  data: Body,
  dispatchSuccess: (dispatch: Dispatch) => Promise<void | string | number>,
  dispatchLoading: (dispatch: Dispatch) => Promise<void | string | number>
) =>
  axios
    .request({ url, method, headers, data })
    .then(({ data }) => dispatchSuccess(data))
    .catch((error) => toast.error(error.response?.data || 'Error!'))
    .finally(() => dispatchLoading);
