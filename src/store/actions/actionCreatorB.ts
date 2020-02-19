import * as types from '../actionTypes';
import { Dispatch } from 'redux';

export interface InterfaceActionB {
  type: string;
  text: string;
}

export const asyncActionCreatorB = (actionDetail: string) => {
  // follow redux-thunk, do some async thing
  return (dispatch: Dispatch, getState: Function) => {
    console.log('Get the whole state before async dispatch');
    console.log(getState());
    setTimeout(() => {
      dispatch({
        type: types.ACTION_TYPE_B,
        text: actionDetail
      });
    }, 1000);
  };
};
