import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from 'redux/reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export type RootState = ReturnType<typeof rootReducer>;
export default store;
