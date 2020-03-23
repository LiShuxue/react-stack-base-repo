import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Page3 from 'src/pages/page3';
import { actionCreatorA, asyncActionCreatorB } from 'src/store/actions';

jest.mock('react-redux', () => {
  const useSelector = jest.fn();
  useSelector
    .mockImplementationOnce(() => 'this is preload stateA')
    .mockImplementationOnce(() => 'this is preload stateB');

  const dispatch = jest.fn(action => {
    if (typeof action === 'object') {
    }
    if (typeof action === 'function') {
      action();
    }
  });
  const useDispatch = () => dispatch;

  return {
    useSelector,
    useDispatch
  };
});

jest.mock('src/store/actions', () => ({
  actionCreatorA: jest.fn(),
  asyncActionCreatorB: jest.fn()
}));

test('should render page correctly', () => {
  const { asFragment } = render(<Page3 />);
  expect(asFragment()).toMatchSnapshot();
});

test('should have "click this button to change the stateA" button', () => {
  const { getByText } = render(<Page3 />);
  const element = getByText('click this button to change the stateA');
  expect(element).toBeInTheDocument();
});

test('should have "click this button to async change the stateB" button', () => {
  const { getByText } = render(<Page3 />);
  const element = getByText('click this button to async change the stateB');
  expect(element).toBeInTheDocument();
});

test('click first button should dispatch actionCreatorA', () => {
  const { getByText } = render(<Page3 />);
  const element = getByText('click this button to change the stateA');
  fireEvent.click(element);
  expect(actionCreatorA.mock.calls.length).toEqual(1);
});

test('click second button should dispatch asyncActionCreatorB', async () => {
  const { getByText } = render(<Page3 />);
  const element = getByText('click this button to async change the stateB');
  fireEvent.click(element);
  expect(asyncActionCreatorB.mock.calls.length).toEqual(1);
});
