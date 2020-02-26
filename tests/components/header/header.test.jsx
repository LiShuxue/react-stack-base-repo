import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from 'components/header';

test('should render Header component correctly', () => {
  const testRenderer = renderer.create(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const dom = testRenderer.toJSON();
  expect(dom).toMatchSnapshot();
});

test('should have "Trade Query", "Exceptions", "Rules" link', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect.assertions(6);

  const tradeQuery = getByText('Trade Query');
  expect(tradeQuery).toBeInTheDocument();
  expect(tradeQuery).toHaveClass('link');

  const exceptions = getByText('Exceptions');
  expect(exceptions).toBeInTheDocument();
  expect(exceptions).toHaveClass('link');

  const rules = getByText('Rules');
  expect(rules).toBeInTheDocument();
  expect(rules).toHaveClass('link');
});

test('if link be choose, should have active class', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );

  expect.assertions(3);

  const tradeQuery = getByText('Trade Query');
  fireEvent.click(tradeQuery);
  expect(tradeQuery).toHaveClass('active');

  const exceptions = getByText('Exceptions');
  fireEvent.click(exceptions);
  expect(exceptions).toHaveClass('active');

  const rules = getByText('Rules');
  fireEvent.click(rules);
  expect(rules).toHaveClass('active');
});
