import * as types from '../actionTypes';
import { InterfaceActionA } from '../actions/actionCreatorA';

export const handleActionA = (state: string = 'this is init A', action: InterfaceActionA) => {
  console.log(state);
  switch(action.type) {
    case types.ACTION_TYPE_A: 
      return action.text
    default: 
      return state;
  }
}