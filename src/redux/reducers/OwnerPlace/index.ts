import {
  PlaceStateType,
  OWNER_PLACE_LOADING,
  PlaceActionTypes,
  OWNER_PLACE_DATA,
  ADMIN_PLACE_LOADING,
  ADMIN_PLACE_DATA,
} from 'redux/types/PlaceTypes';

const initialStateUser: PlaceStateType = {
  ownerPlaceLoading: false,
  adminPlaceLoading: false,
  ownerPlaceData: [],
  adminPlaceData: [],
};

export const OwnerPlaceReducer = (state = initialStateUser, action: PlaceActionTypes): PlaceStateType => {
  switch (action.type) {
    case OWNER_PLACE_LOADING:
      return {
        ...state,
        ownerPlaceLoading: action.loading,
      };
    case OWNER_PLACE_DATA:
      return {
        ...state,
        ownerPlaceData: action.ownerPlaceData,
      };
    case ADMIN_PLACE_LOADING:
      return {
        ...state,
        ownerPlaceLoading: action.loading,
      };
    case ADMIN_PLACE_DATA:
      return {
        ...state,
        adminPlaceData: action.adminPlaceData,
      };
    default:
      return state;
  }
};
