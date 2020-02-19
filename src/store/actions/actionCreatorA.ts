import * as types from '../actionTypes';

export interface InterfaceActionA {
  type: string;
  text: string;
}
export const actionCreatorA = (actionDetail: string): InterfaceActionA => {
  return {
    type: types.ACTION_TYPE_A,
    text: actionDetail
  };
};
