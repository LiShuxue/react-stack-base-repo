import * as types from '../actionTypes';
import { Dispatch } from 'redux';
import { testGetMethod } from 'src/http/api';

const requestSuccess = () => {
  return {
    type: types.REQUEST_SUCCESS,
    data: 'request success'
  };
};
const requestFailed = () => {
  return {
    type: types.REQUEST_FAILED,
    data: 'request failed'
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
