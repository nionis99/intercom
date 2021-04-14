import { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { toast } from 'react-toastify';

import apiAction, { ApiMethodEnums } from 'redux/actions/API';
import {
  FLAT_USERS_DATA,
  FLAT_USERS_LOADING,
  FlatUsersActionTypes,
  UPDATE_FLAT_USER_DATA,
  UPDATE_FLAT_USER_LOADING,
} from 'redux/types/FlatUsers';
import { GET_USERS, USERS } from 'Constants';
import { FlatUserFormInputs } from 'components/Forms/FlatUserForm';
import FlatUser from 'types/FlatUser';

const getFlatUsersLoading = (loading: boolean): FlatUsersActionTypes => ({
  type: FLAT_USERS_LOADING,
  loading,
});

const setFlatUsersData = (flatUsers: FlatUser[]): FlatUsersActionTypes => ({
  type: FLAT_USERS_DATA,
  flatUsersData: flatUsers,
});

const updateFlatUserLoading = (loading: boolean): FlatUsersActionTypes => ({
  type: UPDATE_FLAT_USER_LOADING,
  loading,
});

const updateFlatUserData = (flatUser: FlatUserFormInputs): FlatUsersActionTypes => ({
  type: UPDATE_FLAT_USER_DATA,
  flatUserData: flatUser as FlatUser,
});

export const getFlatUsers = (flatId: string) => (dispatch: Dispatch) => {
  dispatch(getFlatUsersLoading(true));
  const dispatchSuccess = (response: AxiosResponse) => dispatch(setFlatUsersData(response.data));
  const dispatchLoading = () => dispatch(getFlatUsersLoading(false));
  return apiAction(`${GET_USERS}?flat_id=${flatId}`, ApiMethodEnums.GET, dispatchSuccess, dispatchLoading);
};

export const updateFlatUser = (data: FlatUserFormInputs, userId: number, responseText: string) => (
  dispatch: Dispatch
) => {
  dispatch(updateFlatUserLoading(true));
  const dispatchSuccess = () => {
    dispatch(updateFlatUserData({ ...data, id: userId }));
    toast.success(responseText);
  };
  const dispatchLoading = () => dispatch(updateFlatUserLoading(false));
  return apiAction(`${USERS}/${userId}`, ApiMethodEnums.PUT, dispatchSuccess, dispatchLoading, data);
};
