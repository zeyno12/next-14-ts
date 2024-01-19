import { fireEvent, render, screen } from '@testing-library/react';
import Header from '.';


describe('Footer component', () => {
    it('renders correctly', () => {
        render(<Header />);
        const view = screen.getByTestId("header");
        fireEvent.click(view);
    });
});
