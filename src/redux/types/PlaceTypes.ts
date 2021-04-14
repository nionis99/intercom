import Place from 'types/Place';

export const OWNER_PLACE_LOADING = 'OWNER_PLACE_LOADING';
export const OWNER_PLACE_DATA = 'OWNER_PLACE_DATA';
export const ADMIN_PLACE_LOADING = 'ADMIN_PLACE_LOADING';
export const ADMIN_PLACE_DATA = 'ADMIN_PLACE_DATA';

export interface PlaceStateType {
  adminPlaceLoading: boolean;
  ownerPlaceLoading: boolean;
  adminPlaceData: Place[];
  ownerPlaceData: Place[];
}

interface OwnerPlaceLoadingActionType {
  type: typeof OWNER_PLACE_LOADING;
  loading: boolean;
}

interface OwnerPlaceDataActionType {
  type: typeof OWNER_PLACE_DATA;
  ownerPlaceData: Place[];
}

interface AdminPlaceLoadingActionType {
  type: typeof ADMIN_PLACE_LOADING;
  loading: boolean;
}

interface AdminPlaceDataActionType {
  type: typeof ADMIN_PLACE_DATA;
  adminPlaceData: Place[];
}

export type PlaceActionTypes =
  | OwnerPlaceLoadingActionType
  | OwnerPlaceDataActionType
  | AdminPlaceLoadingActionType
  | AdminPlaceDataActionType;
