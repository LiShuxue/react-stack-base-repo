import * as types from '../actionTypes';

export const reducerB = (state: string = 'this is init B', action: ActionType) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return action.data;
    case types.REQUEST_FAILED:
      return action.data;
    default:
      return state;
  }
};
