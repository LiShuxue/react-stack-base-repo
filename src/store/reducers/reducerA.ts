import * as types from '../actionTypes';

export const reducerA = (state: string = 'this is init A', action: ActionType) => {
  switch (action.type) {
    case types.ACTION_TYPE_A:
      return action.data;
    default:
      return state;
  }
};
