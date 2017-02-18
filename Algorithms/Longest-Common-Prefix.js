/**
 * Created by zhangzhe on 2017/2/15.
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) {
        return ''
    }
    var minStr = '';
    //先遍历找出长度最小的串
    for (var i = 0; i < strs.length; i++) {
        var str = strs[i];
        if (typeof str !== 'string') {
            return ''
        }
        if (!minStr) {
            minStr = str
        }
        if (minStr.length > str.length) {
            minStr = str;
        }
    }
    var answer = '';
    var arrLength = strs.length;
    for (var j = 0; j < minStr.length; j++) {
        var thisSub = minStr.substring(0, j + 1);
        for (var k = 0; k < arrLength; k++) {
            //如果未匹配到 break
            if (strs[k].indexOf(thisSub) !== 0) {
                break;
            }
        }
        //如果未遍历完整个数组，即当前不是公共子串，break;
        if (k !== arrLength) {
            break;
        } else {
            answer = thisSub;
        }
    }
    return answer;
};

module.exports = longestCommonPrefix;