import * as types from '../actionTypes';
import { InterfaceActionB } from '../actions/actionCreatorB';

export const handleActionB = (state: string = 'this is init B', action: InterfaceActionB) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      return action.text;
    case types.REQUEST_FAILED:
      return action.text;
    default:
      return state;
  }
};
