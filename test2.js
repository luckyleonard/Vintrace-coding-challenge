"use strict";
exports.__esModule = true;
exports.Kata = void 0;
var Kata = /** @class */ (function () {
    function Kata() {
    }
    Kata.validatePin = function (pin) {
        if ((pin.length === 4 || pin.length === 6) && Number(pin) !== NaN) {
            return true;
        }
        return false;
    };
    return Kata;
}());
exports.Kata = Kata;
console.log(Kata.validatePin('0000'));
