/* eslint-disable no-undef */
import { isPrime } from './isPrime';

describe('isPrime Utils', () => {
  it('Its a prime number', () => {
    [3, 5, 7, 11].map((num) => {
      return expect(isPrime(num)).toEqual(true);
    });
  });

  it('its not a prime number', () => {
    [4, 6, 8].map((num) => {
      return expect(isPrime(num)).toEqual(false);
    });
  });
});
