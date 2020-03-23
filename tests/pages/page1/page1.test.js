import React from 'react';
import { render } from '@testing-library/react';
import Page1 from 'src/pages/page1';

jest.mock('react-redux', () => {
  const useSelector = jest.fn();
  useSelector.mockImplementationOnce(() => 'dark');

  return {
    useSelector
  };
});

test('should render page1 correctly', () => {
  const { asFragment } = render(<Page1 />);
  expect(asFragment()).toMatchSnapshot();
});

test('should have "default button" and "disabled button"', () => {
  const { getByText } = render(<Page1 />);

  expect.assertions(2);

  const defaultBtn = getByText('default Button');
  expect(defaultBtn).toBeInTheDocument();

  const disabledBtn = getByText('disabled Button');
  expect(disabledBtn).toBeInTheDocument();
});

test('should have a datalist', () => {
  const { getByTestId } = render(<Page1 />);
  const datalist = getByTestId('datalist');
  expect(datalist).toBeInTheDocument();
});
