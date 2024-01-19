import { fireEvent, render, screen } from '@testing-library/react';
import Footer from '.';


describe('Footer component', () => {
    it('renders correctly', () => {
        render(<Footer />);
        const view = screen.getByTestId("footer");
        fireEvent.click(view);
    });
});
