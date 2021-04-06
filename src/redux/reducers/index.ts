import { combineReducers } from 'redux';
import { AuthReducer } from './Authorization';
import { UserReducer } from './User';
import { OwnerPlaceReducer } from './OwnerPlace';
import { DoorReducer } from './Door';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  doors: DoorReducer,
  place: OwnerPlaceReducer,
});

export default rootReducer;
