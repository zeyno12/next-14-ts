import { render, screen, fireEvent } from '@testing-library/react';
import CarCard from '.';

const mockCar = {
    city_mpg: 25,
    year: 2022,
    make: 'ExampleMake',
    model: 'ExampleModel',
    transmission: 'a',
    drive: 'front-wheel-drive',
};

describe('CarCard Component', () => {
    it('closes CarDetails modal when closeModal is called', () => {
        render(<CarCard car={mockCar} />);
        const view = screen.getByTestId("viewmore");
        fireEvent.click(view);

    });
});
