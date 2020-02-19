import * as types from '../actionTypes';
import { InterfaceActionB } from '../actions/actionCreatorB';

export const handleActionB = (state: string = 'this is init B', action: InterfaceActionB) => {
  console.log(state);
  switch (action.type) {
    case types.ACTION_TYPE_B:
      return action.text;
    default:
      return state;
  }
};
