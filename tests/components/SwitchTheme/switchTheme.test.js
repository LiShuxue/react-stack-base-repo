import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SwitchTheme from 'components/switchTheme';

test('should render Header component correctly', () => {
  const { asFragment } = render(<SwitchTheme />);
  expect(asFragment()).toMatchSnapshot();
});

test('should have "dark theme" button and click this button should change to dark theme', () => {
  const { getByText } = render(<SwitchTheme />);

  const darkThemeBtn = getByText('dark theme');
  expect(darkThemeBtn).toBeInTheDocument();

  fireEvent.click(darkThemeBtn);
  expect(localStorage.getItem('theme')).toEqual('dark');
});

test('should have "light theme" button and click this button should change to light theme', () => {
  const { getByText } = render(<SwitchTheme />);

  const lightThemeBtn = getByText('light theme');
  expect(lightThemeBtn).toBeInTheDocument();

  fireEvent.click(lightThemeBtn);
  expect(localStorage.getItem('theme')).toEqual('light');
});
