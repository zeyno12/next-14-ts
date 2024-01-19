import { calculateCarRent, deleteSearchParams, fetchCars, generateCarImageUrl } from '.';
import { CarProps, FilterProps } from '../types';

// Mocking the global window object
global.window = Object.create(window);

describe('calculateCarRent', () => {
  it('calculates car rent correctly', () => {
    const city_mpg = 25;
    const year = 2020;
    const result = calculateCarRent(city_mpg, year);
    // Adjust the expected result based on your calculations
    expect(result).toBe('53');
  });
});


describe('fetchCars', () => {
  it('fetches cars correctly', async () => {
    const filters: FilterProps = {
      manufacturer: 'Toyota',
      year: 2022,
      model: 'Camry',
      limit: 5,
      fuel: 'gasoline',
    };

    // Mocking the fetch function
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: 'mocked data' }),
      } as Response)
    );

    const result = await fetchCars(filters);
    expect(result).toEqual({ data: 'mocked data' });
  });
});

describe('generateCarImageUrl', () => {
  it('generates car image URL correctly', () => {
    const car: CarProps = {
      make: 'Toyota',
      model: 'Camry',
      year: 2022,
    };
    const angle = 'front';

    const result = generateCarImageUrl(car, angle);
    // Adjust the expected result based on your URL generation logic
    expect(result).toContain('https://cdn.imagin.studio/getimage');
  });
});
