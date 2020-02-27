import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ConnectRules, { Rules } from 'src/pages/rules';
import store from 'src/store';

test('should render Rules page correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <ConnectRules />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should have "click this button to change the stateA" button', () => {
  const { getByText } = render(<Rules />);
  const element = getByText('click this button to change the stateA');
  expect(element).toBeInTheDocument();
});

test('should have "click this button to async change the stateB" button', () => {
  const { getByText } = render(<Rules />);
  const element = getByText('click this button to async change the stateB');
  expect(element).toBeInTheDocument();
});

test('click first button should call actionCreatorA', () => {
  const actionCreatorA = jest.fn();
  const { getByText } = render(<Rules actionCreatorA={actionCreatorA} />);
  const element = getByText('click this button to change the stateA');
  fireEvent.click(element);
  expect(actionCreatorA.mock.calls.length).toEqual(1);
});

test('click second button should call asyncActionCreatorB', async () => {
  const asyncActionCreatorB = jest.fn();
  const { getByText } = render(<Rules asyncActionCreatorB={asyncActionCreatorB} />);
  const element = getByText('click this button to async change the stateB');
  fireEvent.click(element);
  expect(asyncActionCreatorB.mock.calls.length).toEqual(1);
});
