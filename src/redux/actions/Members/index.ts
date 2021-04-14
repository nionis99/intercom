import { toast } from 'react-toastify';
import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import {
  MEMBERS_DATA,
  MEMBERS_LOADING,
  CREATE_MEMBER_LOADING,
  CREATE_MEMBER_DATA,
  UPDATE_MEMBER_LOADING,
  UPDATE_MEMBER_DATA,
  DELETE_MEMBER_LOADING,
  DELETE_MEMBER,
  MembersActionTypes,
} from 'redux/types/MembersTypes';
import apiAction, { ApiMethodEnums } from 'redux/actions/API';
import { MemberFormInputs } from 'components/Forms/MemberForm';
import { ADMIN_MEMBERS, GET_ADMIN_MEMBERS, GET_MEMBERS, MEMBERS } from 'Constants';
import Member from 'types/Member';

const getMembersLoading = (loading: boolean): MembersActionTypes => ({
  type: MEMBERS_LOADING,
  loading,
});

const setMembersData = (members: Member[]): MembersActionTypes => ({
  type: MEMBERS_DATA,
  memberData: members,
});

const createMemberLoading = (loading: boolean): MembersActionTypes => ({
  type: CREATE_MEMBER_LOADING,
  loading,
});

const createMemberData = (member: MemberFormInputs): MembersActionTypes => ({
  type: CREATE_MEMBER_DATA,
  member: (member as unknown) as Member,
});

const updateMemberLoading = (loading: boolean): MembersActionTypes => ({
  type: UPDATE_MEMBER_LOADING,
  loading,
});

const updateMemberData = (member: MemberFormInputs): MembersActionTypes => ({
  type: UPDATE_MEMBER_DATA,
  member: (member as unknown) as Member,
});

const deleteMemberLoading = (loading: boolean): MembersActionTypes => ({
  type: DELETE_MEMBER_LOADING,
  loading,
});

const deleteMemberData = (memberId: number): MembersActionTypes => ({
  type: DELETE_MEMBER,
  id: memberId,
});

export const getMembers = (flatId: string | null, isAdmin: boolean) => (dispatch: Dispatch) => {
  dispatch(getMembersLoading(true));
  const dispatchSuccess = (response: AxiosResponse) => dispatch(setMembersData(response.data));
  const dispatchLoading = () => dispatch(getMembersLoading(false));
  return apiAction(
    `${isAdmin ? GET_ADMIN_MEMBERS : GET_MEMBERS}?flat_id=${flatId}`,
    ApiMethodEnums.GET,
    dispatchSuccess,
    dispatchLoading
  );
};

export const createMember = (isAdmin: boolean, data: MemberFormInputs, responseText: string) => (
  dispatch: Dispatch
) => {
  dispatch(createMemberLoading(true));

  const dispatchSuccess = (response: AxiosResponse) => {
    dispatch(createMemberData({ ...data, id: response.data.id }));
    toast.success(responseText);
  };

  const dispatchLoading = () => dispatch(createMemberLoading(false));
  return apiAction(isAdmin ? ADMIN_MEMBERS : MEMBERS, ApiMethodEnums.POST, dispatchSuccess, dispatchLoading, data);
};

export const updateMember = (isAdmin: boolean, data: MemberFormInputs, memberId: number, responseText: string) => (
  dispatch: Dispatch
) => {
  dispatch(updateMemberLoading(true));

  const dispatchSuccess = () => {
    dispatch(updateMemberData({ ...data, id: memberId }));
    toast.success(responseText);
  };

  const dispatchLoading = () => dispatch(updateMemberLoading(false));
  return apiAction(
    `${isAdmin ? ADMIN_MEMBERS : MEMBERS}/${memberId}`,
    ApiMethodEnums.PUT,
    dispatchSuccess,
    dispatchLoading,
    data
  );
};

export const deleteMember = (isAdmin: boolean, memberId: number, responseText: string) => (dispatch: Dispatch) => {
  dispatch(deleteMemberLoading(true));

  const dispatchSuccess = () => {
    dispatch(deleteMemberData(memberId));
    toast.success(responseText);
  };

  const dispatchLoading = () => dispatch(deleteMemberLoading(false));
  return apiAction(
    `${isAdmin ? ADMIN_MEMBERS : MEMBERS}/${memberId}`,
    ApiMethodEnums.DELETE,
    dispatchSuccess,
    dispatchLoading
  );
};
