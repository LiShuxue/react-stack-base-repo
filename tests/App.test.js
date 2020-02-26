import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from 'src/App';
import store from 'src/store';

test('should render App correctly', () => {
  const testRenderer = renderer.create(<App />);
  const dom = testRenderer.toJSON();
  expect(dom).toMatchSnapshot();
});

test('should have "Trade Query", "Exceptions", "Rules" link', () => {
  const { getByText } = render(<App />);

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

test('"Trade Query" link should be choose default', () => {
  const { getByText } = render(<App />);
  const element = getByText('Trade Query');
  expect(element).toHaveClass('active');
});

test('click "Trade Query" link should show "Trade Query" page', () => {
  const { getByText, asFragment } = render(<App />);
  const element = getByText('Trade Query');
  fireEvent.click(element);
  expect(asFragment()).toMatchSnapshot();
});

test('click "Exceptions" link should show "Exceptions" page', () => {
  const { getByText, asFragment } = render(<App />);
  const element = getByText('Exceptions');
  fireEvent.click(element);
  expect(asFragment()).toMatchSnapshot();
});

test('click "Rules" link should show "Rules" page', () => {
  const { getByText, asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const element = getByText('Rules');
  fireEvent.click(element);
  expect(asFragment()).toMatchSnapshot();
});
