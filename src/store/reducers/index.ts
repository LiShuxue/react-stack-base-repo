import { combineReducers } from 'redux';

import { reducerA } from './reducerA';
import { reducerB } from './reducerB';
import { switchTheme } from './switchTheme';

// preload state object key must be same as reducer
const reducer = combineReducers({
  stateA: reducerA,
  stateB: reducerB,
  theme: switchTheme
});

export default reducer;
