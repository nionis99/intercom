import { Dispatch } from 'redux';
import { toast } from 'react-toastify';

import apiAction, { ApiMethodEnums } from 'redux/actions/API';
import { CHANGE_PASSWORD_LOADING, UserActionTypes } from 'redux/types/UserTypes';
import { ProfileFormInputs } from 'components/UserInfo';
import { USER_URL } from 'Constants';

export const changePasswordLoading = (loading: boolean): UserActionTypes => ({
  type: CHANGE_PASSWORD_LOADING,
  loading,
});

export const changePassword = (id: number, data: ProfileFormInputs, responseText: string) => (dispatch: Dispatch) => {
  dispatch(changePasswordLoading(true));
  const dispatchSuccess = () => toast.success(responseText);
  const dispatchLoading = () => dispatch(changePasswordLoading(false));
  return apiAction(`${USER_URL}/${id}`, ApiMethodEnums.PUT, dispatchSuccess, dispatchLoading, data);
};
