import { combineReducers } from 'redux';
import { OwnerPlaceReducer } from './OwnerPlace';
import { MembersReducer } from './Members';
import { MemberReducer } from './Member';
import { AuthReducer } from './Authorization';
import { UserReducer } from './User';
import { DoorReducer } from './Door';

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  doors: DoorReducer,
  place: OwnerPlaceReducer,
  members: MembersReducer,
  member: MemberReducer,
});

export default rootReducer;
