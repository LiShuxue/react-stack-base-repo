import * as types from '../actionTypes';
import { InterfaceActionA } from '../actions/actionCreatorA';

export const reducerA = (state: string = 'this is init A', action: InterfaceActionA) => {
  switch (action.type) {
    case types.ACTION_TYPE_A:
      return action.text;
    default:
      return state;
  }
};
