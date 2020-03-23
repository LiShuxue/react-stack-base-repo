import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { asyncActionCreatorB } from 'src/store/actions';
import * as types from 'src/store/actionTypes';

jest.mock('src/http/api', () => {
  const testGetMethod = jest.fn();
  testGetMethod
    .mockImplementationOnce(() => Promise.resolve('get method success'))
    .mockImplementationOnce(() => Promise.reject('get method failed'));
  return {
    testGetMethod
  };
});

test('test async action, should return success action when request success, and should return falied action when request failed', async () => {
  const expectedActions = [
    {
      type: types.REQUEST_SUCCESS,
      data: 'request success'
    },
    {
      type: types.REQUEST_FAILED,
      data: 'request failed'
    }
  ];

  const middleware = [thunk];
  const mockStore = configureMockStore(middleware);
  const store = mockStore();

  await store.dispatch(asyncActionCreatorB());
  await store.dispatch(asyncActionCreatorB());
  expect(store.getActions()).toEqual(expectedActions);
});
