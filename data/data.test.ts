import { manufacturers } from ".";

export function getCarManufacturers() {
  return manufacturers;
}
describe('getCarManufacturers', () => {
  it('should return an array of car manufacturers', () => {
    const result = getCarManufacturers();
    expect(result[0]).toBe('Acura');
  });
});
