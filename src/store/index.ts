import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';

// preload state object key must be same as reducer
const preloadState = {
  stateA: 'this is preload A',
  stateB: 'this is preload B'
};

// we not have to pass the preloadState, then it will use the default value in reducer as the state
const store = createStore(reducer, preloadState, applyMiddleware(thunk));

export default store;