import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import apiAction, { ApiMethodEnums } from 'redux/actions/API';
import { MemberActionTypes, MEMBER_DATA, MEMBER_LOADING } from 'redux/types/MemberTypes';
import { MEMBERS } from 'Constants';
import Member from 'types/Member';

const getMemberLoading = (loading: boolean): MemberActionTypes => ({
  type: MEMBER_LOADING,
  loading,
});

const setMemberData = (member: Member): MemberActionTypes => ({
  type: MEMBER_DATA,
  memberData: member,
});

export const getMember = (memberId: string) => (dispatch: Dispatch) => {
  dispatch(getMemberLoading(true));
  console.log(memberId);
  const dispatchSuccess = (response: AxiosResponse) => dispatch(setMemberData(response.data));
  const dispatchLoading = () => dispatch(getMemberLoading(false));
  return apiAction(`${MEMBERS}/${memberId}`, ApiMethodEnums.GET, dispatchSuccess, dispatchLoading);
};
