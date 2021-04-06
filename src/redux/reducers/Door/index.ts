import { DOOR_LOADING, DoorActionTypes, DoorStateType, DOOR_DATA } from '../../types/DoorTypes';

const initialStateUser: DoorStateType = {
  doorsLoading: false,
  doorsData: [],
};

export const DoorReducer = (state = initialStateUser, action: DoorActionTypes): DoorStateType => {
  console.log(action, state);
  switch (action.type) {
    case DOOR_LOADING:
      return {
        ...state,
        doorsLoading: action.loading,
      };
    case DOOR_DATA:
      return {
        ...state,
        doorsData: action.doorsData,
      };
    default:
      return state;
  }
};
