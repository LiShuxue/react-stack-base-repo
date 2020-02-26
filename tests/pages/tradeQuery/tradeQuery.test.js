import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import TradeQuery from 'src/pages/tradeQuery';

test('should render TradeQuery page correctly', () => {
  const testRenderer = renderer.create(<TradeQuery />);
  const dom = testRenderer.toJSON();
  expect(dom).toMatchSnapshot();
});

test('should have "default button" and "disabled button"', () => {
  const { getByText } = render(<TradeQuery />);

  expect.assertions(2);

  const defaultBtn = getByText('default Button');
  expect(defaultBtn).toBeInTheDocument();

  const disabledBtn = getByText('disabled Button');
  expect(disabledBtn).toBeInTheDocument();
});

test('should have a datalist', () => {
  const { getByTestId } = render(<TradeQuery />);
  const datalist = getByTestId('datalist');
  expect(datalist).toBeInTheDocument();
});
