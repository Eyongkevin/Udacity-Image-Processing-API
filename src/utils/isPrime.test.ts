/* eslint-disable no-undef */
import { isPrime } from './isPrime';

const primes: number[] = [3, 5, 7, 11];
const notPrimes: number[] = [4, 6, 8];

describe('isPrime Utils', () => {
  it('Its a prime number', () => {
    primes.map((num) => {
      return expect(isPrime(num)).toEqual(true);
    });
  });

  it('its not a prime number', () => {
    notPrimes.map((num) => {
      return expect(isPrime(num)).toEqual(false);
    });
  });
});
