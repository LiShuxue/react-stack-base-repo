import { reducerB } from 'src/store/reducers/reducerB';
import * as types from 'src/store/actionTypes';

test('should return the initial state', () => {
  const expectResult = 'this is init B';
  const state = reducerB(undefined, {});
  expect(state).toEqual(expectResult);
});

test('should handle "REQUEST_SUCCESS"', () => {
  const expectResult = 'expect success state';
  const action = {
    type: types.REQUEST_SUCCESS,
    text: expectResult
  };
  const state = reducerB(undefined, action);
  expect(state).toEqual(expectResult);
});

test('should handle "REQUEST_FAILED"', () => {
  const expectResult = 'expect failed state';
  const action = {
    type: types.REQUEST_FAILED,
    text: expectResult
  };
  const state = reducerB(undefined, action);
  expect(state).toEqual(expectResult);
});
