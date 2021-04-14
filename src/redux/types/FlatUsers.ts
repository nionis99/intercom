import FlatUser from 'types/FlatUser';

export const FLAT_USERS_LOADING = 'FLAT_USERS_LOADING';
export const FLAT_USERS_DATA = 'FLAT_USERS_DATA';
export const UPDATE_FLAT_USER_LOADING = 'UPDATE_FLAT_USER_LOADING';
export const UPDATE_FLAT_USER_DATA = 'UPDATE_FLAT_USER_DATA';

export interface FlatUsersStateType {
  flatUsersLoading: boolean;
  updateLoading: boolean;
  flatUsersData: FlatUser[];
}

interface FlatUsersLoadingActionType {
  type: typeof FLAT_USERS_LOADING;
  loading: boolean;
}

interface FlatUsersDataActionType {
  type: typeof FLAT_USERS_DATA;
  flatUsersData: FlatUser[];
}

interface UpdateFlatUserLoadingActionType {
  type: typeof UPDATE_FLAT_USER_LOADING;
  loading: boolean;
}

interface UpdateFlatUserDataActionType {
  type: typeof UPDATE_FLAT_USER_DATA;
  flatUserData: FlatUser;
}

export type FlatUsersActionTypes =
  | FlatUsersLoadingActionType
  | FlatUsersDataActionType
  | UpdateFlatUserLoadingActionType
  | UpdateFlatUserDataActionType;
