import Member from 'types/Member';
import { Maybe } from 'types';

export const MEMBER_LOADING = 'MEMBER_LOADING';
export const MEMBER_DATA = 'MEMBER_DATA';

export interface MemberStateType {
  memberLoading: boolean;
  memberData: Maybe<Member>;
}

interface MemberLoadingActionType {
  type: typeof MEMBER_LOADING;
  loading: boolean;
}

interface MemberDataActionType {
  type: typeof MEMBER_DATA;
  memberData: Member;
}

export type MemberActionTypes = MemberLoadingActionType | MemberDataActionType;
