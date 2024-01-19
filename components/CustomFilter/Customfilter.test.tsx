import { fireEvent, render, screen } from '@testing-library/react';
import CustomFilter from '.';

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
describe('Footer component', () => {
    const option={
        title:"sasa"
    }
    it('renders correctly', () => {
        render(<CustomFilter title='sas' options={option} />);
        const view = screen.getByTestId("footer");
        fireEvent.click(view);
    });
});
