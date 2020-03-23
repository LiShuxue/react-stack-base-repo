import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from 'src/App';
import store from 'src/store';

test('should render App correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should have "page1", "page2", "page3" link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect.assertions(6);

  const page1 = getByText('page1');
  expect(page1).toBeInTheDocument();
  expect(page1).toHaveClass('link');

  const page2 = getByText('page2');
  expect(page2).toBeInTheDocument();
  expect(page2).toHaveClass('link');

  const page3 = getByText('page3');
  expect(page3).toBeInTheDocument();
  expect(page3).toHaveClass('link');
});

test('"page1" link should be choose default', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = getByText('page1');
  expect(element).toHaveClass('active');
});

test('click "page1" link should show "page1" page', () => {
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = getByText('page1');
  fireEvent.click(element);
  expect(asFragment()).toMatchSnapshot();
});

test('click "page2" link should show "page2" page', () => {
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = getByText('page2');
  fireEvent.click(element);
  expect(asFragment()).toMatchSnapshot();
});

test('click "page3" link should show "page3" page', () => {
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = getByText('page3');
  fireEvent.click(element);
  expect(asFragment()).toMatchSnapshot();
});
