import { combineReducers } from 'redux';

import { reducerA } from './reducerA';
import { reducerB } from './reducerB';

// preload state object key must be same as reducer
const reducer = combineReducers({
  stateA: reducerA,
  stateB: reducerB
});

export default reducer;
