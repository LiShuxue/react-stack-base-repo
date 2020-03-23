import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Page2 from 'src/pages/page2';
import { testGetMethod, testPostMethod } from 'src/http/api';

jest.mock('src/http/api', () => ({
  testGetMethod: jest.fn(() => Promise.resolve('get method success')),
  testPostMethod: jest.fn(() => Promise.resolve('post method success'))
}));

test('should render page correctly', () => {
  const { asFragment } = render(<Page2 />);
  expect(asFragment()).toMatchSnapshot();
});

test('should have "testGetApi", "testPostApi" button', () => {
  const { getByText } = render(<Page2 />);

  expect.assertions(2);

  const testGetApi = getByText('testGetApi');
  expect(testGetApi).toBeInTheDocument();

  const testPostApi = getByText('testPostApi');
  expect(testPostApi).toBeInTheDocument();
});

test('click "testGetApi" button should call "testGetMethod"', () => {
  const { getByText } = render(<Page2 />);
  const element = getByText('testGetApi');
  fireEvent.click(element);
  expect(testGetMethod.mock.calls.length).toEqual(1);
});

test('click "testPostApi" button should call "testPostMethod"', () => {
  const { getByText } = render(<Page2 />);
  const element = getByText('testPostApi');
  fireEvent.click(element);
  expect(testPostMethod.mock.calls.length).toEqual(1);
});
