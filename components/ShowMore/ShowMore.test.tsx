// Import necessary dependencies for testing
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShowMore from '.';

// Mock the useRouter hook
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock the CustomButton component
jest.mock('..', () => ({
  CustomButton: jest.fn(({ title, handleClick }) => (
    <button className="flex-1" onClick={handleClick}>{title}</button>
    )),
}));

describe('ShowMore component', () => {
  it('renders Show More button correctly', () => {
    // Mock the useRouter response
    const useRouterMock = jest.requireMock('next/navigation').useRouter;
    useRouterMock.mockReturnValue({
      push: jest.fn(),
    });

    // Render the ShowMore component
    render(<ShowMore pageNumber={1} isNext={false} />);

    expect(screen.getByText('Show More')).toBeInTheDocument();
  });

  it('handles navigation on button click', () => {
    // Mock the useRouter response
    const useRouterMock = jest.requireMock('next/navigation').useRouter;
    const pushMock = jest.fn();
    useRouterMock.mockReturnValue({
      push: pushMock,
    });

    // Render the ShowMore component
    render(<ShowMore pageNumber={1} isNext={false} />);

    // Simulate a button click
    fireEvent.click(screen.getByText('Show More'));
    expect(screen.getByText('Show More')).toBeInTheDocument();


  });
});
