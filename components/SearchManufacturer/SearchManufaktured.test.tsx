import { fireEvent, render, screen } from '@testing-library/react';
import SearchManufacturer from '.';


describe('Footer component', () => {
    it('renders correctly', () => {
        render(<SearchManufacturer />);
        const view = screen.getByTestId("searmanu");
        fireEvent.click(view);
    });
});
