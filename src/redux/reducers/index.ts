import { combineReducers } from 'redux';
import { AuthReducer } from './Authorization';
import { UserReducer } from './User';
import { DoorReducer } from './Door';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  doors: DoorReducer,
});

export default rootReducer;
