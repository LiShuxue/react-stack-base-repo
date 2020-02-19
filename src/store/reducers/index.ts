import { combineReducers } from 'redux';

import { handleActionA } from './moduleAReducer';
import { handleActionB } from './moduleBReducer';

// preload state object key must be same as reducer
const reducer = combineReducers({
  stateA: handleActionA,
  stateB: handleActionB
})

export default reducer;