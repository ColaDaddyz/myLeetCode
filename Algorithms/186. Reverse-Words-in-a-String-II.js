/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function(s) {
    return s.join('').split(' ').reverse().join(' ').split('')
};

module.exports = reverseWords;