import { fireEvent, render, screen } from '@testing-library/react';
import Home from './page';

describe('Home component', () => {
  it('renders correctly', async () => {
    const mockSearchParams = {
      manufacturer: 'Toyota',
      year: 2022,
      fuel: 'Gasoline',
      limit: 10,
      model: 'Camry',
    };

    render(<Home searchParams={mockSearchParams} />);
    
    const view = screen.getByTestId("home");
    fireEvent.click(view);
  });
});
