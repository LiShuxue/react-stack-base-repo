import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header';
import { Provider } from 'react-redux';
import store from 'src/store';

test('should render Header component correctly', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('should have "page1", "page2", "page3" link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
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

test('if link be choose, should have active class', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </Provider>
  );

  expect.assertions(3);

  const page1 = getByText('page1');
  fireEvent.click(page1);
  expect(page1).toHaveClass('active');

  const page2 = getByText('page2');
  fireEvent.click(page2);
  expect(page2).toHaveClass('active');

  const page3 = getByText('page3');
  fireEvent.click(page3);
  expect(page3).toHaveClass('active');
});
