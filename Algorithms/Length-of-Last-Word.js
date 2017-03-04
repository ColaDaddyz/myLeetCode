/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (!s) {
        return 0
    }
    var splitArr = s.trim().split(/\s+/);
    return splitArr.slice(-1)[0].length
};