import { combineReducers } from 'redux';
import { AuthReducer } from './Authorization';
import { UserReducer } from './User';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export default rootReducer;
