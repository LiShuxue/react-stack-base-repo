import { actionCreatorA } from 'src/store/actions';
import * as types from 'src/store/actionTypes';

test('test sync action, should return action correctly', () => {
  const text = 'test action';
  const action = {
    type: types.ACTION_TYPE_A,
    text
  };
  expect(actionCreatorA(text)).toEqual(action);
});
