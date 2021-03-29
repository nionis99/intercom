import { CHANGE_PASSWORD_LOADING, UserActionTypes, UserStateType } from '../../types/UserTypes';

const initialStateUser: UserStateType = {
  changePasswordLoading: false,
};

export const UserReducer = (state = initialStateUser, action: UserActionTypes): UserStateType => {
  switch (action.type) {
    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        changePasswordLoading: action.loading,
      };
    default:
      return state;
  }
};
