import { Dispatch } from 'redux';
import { AxiosResponse } from 'axios';

import apiAction, { ApiMethodEnums } from 'redux/actions/API';
import {
  ADMIN_PLACE_DATA,
  ADMIN_PLACE_LOADING,
  OWNER_PLACE_DATA,
  OWNER_PLACE_LOADING,
  PlaceActionTypes,
} from 'redux/types/PlaceTypes';
import { GET_ADMIN_PLACES, GET_OWNER_PLACES } from 'Constants';
import Place from 'types/Place';

const getOwnerPlacesLoading = (loading: boolean): PlaceActionTypes => ({
  type: OWNER_PLACE_LOADING,
  loading,
});

const setOwnerPlacesData = (places: Place[]): PlaceActionTypes => ({
  type: OWNER_PLACE_DATA,
  ownerPlaceData: places,
});

const getAdminPlacesLoading = (loading: boolean): PlaceActionTypes => ({
  type: ADMIN_PLACE_LOADING,
  loading,
});

const setAdminPlacesData = (places: Place[]): PlaceActionTypes => ({
  type: ADMIN_PLACE_DATA,
  adminPlaceData: places,
});

export const getPlaces = () => (dispatch: Dispatch) => {
  dispatch(getOwnerPlacesLoading(true));
  const dispatchSuccess = (response: AxiosResponse) => dispatch(setOwnerPlacesData(response.data));
  const dispatchLoading = () => dispatch(getOwnerPlacesLoading(false));
  return apiAction(GET_OWNER_PLACES, ApiMethodEnums.GET, dispatchSuccess, dispatchLoading);
};

export const getAdminPlaces = () => (dispatch: Dispatch) => {
  dispatch(getAdminPlacesLoading(true));
  const dispatchSuccess = (response: AxiosResponse) => dispatch(setAdminPlacesData(response.data));
  const dispatchLoading = () => dispatch(getAdminPlacesLoading(false));
  return apiAction(GET_ADMIN_PLACES, ApiMethodEnums.GET, dispatchSuccess, dispatchLoading);
};
