"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = void 0;
var isPrime = function (num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0) {
            return false;
        }
    return num > 1;
};
exports.isPrime = isPrime;
//# sourceMappingURL=isPrime.js.map