import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { toMatchDiffSnapshot } from 'snapshot-diff';
import Rules from 'src/pages/rules';
import store from 'src/store';

beforeAll(() => {
  expect.extend({ toMatchDiffSnapshot });
});
test('should render Rules page correctly', () => {
  const testRenderer = renderer.create(
    <Provider store={store}>
      <Rules />
    </Provider>
  );
  const dom = testRenderer.toJSON();
  expect(dom).toMatchSnapshot();
});

test('should have "click this button to change the stateA" button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Rules />
    </Provider>
  );
  const element = getByText('click this button to change the stateA');
  expect(element).toBeInTheDocument();
});

test('should have "click this button to async change the stateB" button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Rules />
    </Provider>
  );
  const element = getByText('click this button to async change the stateB');
  expect(element).toBeInTheDocument();
});

test('click first button should change the stateA immediately', () => {
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <Rules />
    </Provider>
  );
  const element = getByText('click this button to change the stateA');
  const firstUI = asFragment();
  fireEvent.click(element);
  const secondUI = asFragment();
  expect(firstUI).toMatchDiffSnapshot(secondUI);
});

test('click second button should change the stateB asynchronous"', async () => {
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <Rules />
    </Provider>
  );
  const element = getByText('click this button to async change the stateB');
  const firstUI = asFragment();
  fireEvent.click(element);
  await wait(() => getByText(/async changed/i));
  const secondUI = asFragment();
  expect(firstUI).toMatchDiffSnapshot(secondUI);
});
