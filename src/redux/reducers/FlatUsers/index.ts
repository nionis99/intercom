import {
  FLAT_USERS_DATA,
  FLAT_USERS_LOADING,
  FlatUsersActionTypes,
  FlatUsersStateType,
  UPDATE_FLAT_USER_DATA,
  UPDATE_FLAT_USER_LOADING,
} from 'redux/types/FlatUsers';

const initialStateFlatUsers: FlatUsersStateType = {
  flatUsersLoading: false,
  updateLoading: false,
  flatUsersData: [],
};

export const FlatUsersReducer = (state = initialStateFlatUsers, action: FlatUsersActionTypes): FlatUsersStateType => {
  switch (action.type) {
    case FLAT_USERS_LOADING:
      return {
        ...state,
        flatUsersLoading: action.loading,
      };
    case FLAT_USERS_DATA:
      return {
        ...state,
        flatUsersData: action.flatUsersData,
      };
    case UPDATE_FLAT_USER_LOADING:
      return {
        ...state,
        updateLoading: action.loading,
      };
    case UPDATE_FLAT_USER_DATA:
      const index = state.flatUsersData.findIndex((flatUser) => flatUser.id === action.flatUserData.id);

      return {
        ...state,
        flatUsersData: [
          ...state.flatUsersData.slice(0, index),
          { ...state.flatUsersData[index], ...action.flatUserData },
          ...state.flatUsersData.slice(index + 1, state.flatUsersData.length),
        ],
      };
    default:
      return state;
  }
};
