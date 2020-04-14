/**
 * @param {string} str
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    if (!str.length) return 0
    let tmpStr = ''
    let maxStrLen = 0
    let len = str.length
    let left = 0
    for (let i = 0; i < len; i++) {
        if (tmpStr.indexOf(str[i]) !== -1) {
            left += (str.slice(left, i).indexOf(str[i]) + 1)
            continue
        }
        tmpStr = str.slice(left, i + 1)
        maxStrLen = Math.max(maxStrLen, tmpStr.length)
    }
    return maxStrLen
};