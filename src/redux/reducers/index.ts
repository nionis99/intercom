import { combineReducers } from 'redux';
import { FlatUsersReducer } from './FlatUsers';
import { OwnerPlaceReducer } from './OwnerPlace';
import { CardTypesReducer } from './CardTypes';
import { MembersReducer } from './Members';
import { MemberReducer } from './Member';
import { CardsReducer } from './Cards';
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
  cards: CardsReducer,
  cardTypes: CardTypesReducer,
  flatUsers: FlatUsersReducer,
});

export default rootReducer;
