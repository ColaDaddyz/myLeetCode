/**
 * @param {number} x
 * @return {number}
 */
var min = -2147483648;
var max = 2147483647;
var reverse = function (x) {
    var minuZero = x < 0;
    var intStr = "" + (minuZero ? -x : x);
    var reverseStr = intStr.split('').reverse().join('');
    var reverseInt = parseInt(reverseStr);
    if (reverseInt)
        if (minuZero) {
            reverseInt = -reverseInt
        }
    if (reverseInt < min || reverseInt > max) {
        return 0
    }
    return reverseInt
};
module.exports = reverse;