import { reducerA } from 'src/store/reducers/reducerA';
import * as types from 'src/store/actionTypes';

test('should return the initial state', () => {
  const expectResult = 'this is init A';
  const state = reducerA(undefined, {});
  expect(state).toEqual(expectResult);
});

test('should handle "ACTION_TYPE_A"', () => {
  const expectResult = 'expect state';
  const action = {
    type: types.ACTION_TYPE_A,
    data: expectResult
  };
  const state = reducerA(undefined, action);
  expect(state).toEqual(expectResult);
});
