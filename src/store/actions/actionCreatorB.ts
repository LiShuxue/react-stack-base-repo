import * as types from '../actionTypes';
import { Dispatch } from 'redux';
import { testGetMethod } from 'src/http/api';

export interface InterfaceActionB {
  type: string;
  text: string;
}

const requestSuccess = () => {
  return {
    type: types.REQUEST_SUCCESS,
    text: 'request success'
  };
};
const requestFailed = () => {
  return {
    type: types.REQUEST_FAILED,
    text: 'request failed'
  };
};

export const asyncActionCreatorB = () => {
  return async (dispatch: Dispatch, getState: Function) => {
    console.log(getState());
    try {
      await testGetMethod();
      dispatch(requestSuccess());
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};
