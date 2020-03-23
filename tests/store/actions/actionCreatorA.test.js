import { actionCreatorA } from 'src/store/actions';
import * as types from 'src/store/actionTypes';

test('test sync action, should return action correctly', () => {
  const data = 'test action';
  const action = {
    type: types.ACTION_TYPE_A,
    data
  };
  expect(actionCreatorA(data)).toEqual(action);
});
