import * as types from '../actionTypes';

export const actionCreatorA = (actionDetail: string): ActionType => {
  return {
    type: types.ACTION_TYPE_A,
    data: actionDetail
  };
};
