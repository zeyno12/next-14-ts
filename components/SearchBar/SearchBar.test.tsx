import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import SearchBar from '.';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  },
}));

describe('SearchBar component', () => {
  test('it should handle search with valid input', () => {
    const screen = render(<SearchBar />);
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    window.alert = jest.fn();

    const manufacturerInput = screen.getByTestId('manufacturer');
    const modelInput = screen.getByTestId('manufacturer');
    // const searchButton = screen.getByTestId('search');

    // Simulate user typing in the input fields
    fireEvent.change(manufacturerInput, { target: { value: 'Volkswagen' } });

    // Use fireEvent.change to simulate user entering text in the model input

    // Click the search button
    // fireEvent.click(searchButton);


    window.alert.mockRestore();

  });

  test('it should show alert when no input is provided', () => {
    const screen = render(<SearchBar />);
    const pushMock = jest.fn();
    useRouter.mockReturnValue({ push: pushMock });

    window.alert = jest.fn();

    const searchButton = screen.getByTestId('searchbar');

    fireEvent.click(searchButton);

    window.alert.mockRestore();
  });
});
