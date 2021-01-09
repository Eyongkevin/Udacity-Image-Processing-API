"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-undef */
var isPrime_1 = require("./isPrime");
var primes = [3, 5, 7, 11];
var notPrimes = [4, 6, 8];
describe('isPrime Utils', function () {
    it('Its a prime number', function () {
        primes.map(function (num) {
            return expect(isPrime_1.isPrime(num)).toEqual(true);
        });
    });
    it('its not a prime number', function () {
        notPrimes.map(function (num) {
            return expect(isPrime_1.isPrime(num)).toEqual(false);
        });
    });
});
//# sourceMappingURL=isPrime.test.js.map