import { MEMBER_DATA, MEMBER_LOADING, MemberActionTypes, MemberStateType } from 'redux/types/MemberTypes';

const initialStateMember: MemberStateType = {
  memberLoading: false,
  memberData: null,
};

export const MemberReducer = (state = initialStateMember, action: MemberActionTypes): MemberStateType => {
  switch (action.type) {
    case MEMBER_LOADING:
      return {
        ...state,
        memberLoading: action.loading,
      };
    case MEMBER_DATA:
      return {
        ...state,
        memberData: action.memberData,
      };
    default:
      return state;
  }
};
