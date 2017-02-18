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
            minStr = str[i]
        }
        if (minStr.length > str.length) {
            minStr = str;
        }
    }
    for (var j = 0; j < minStr.length; j++) {
        for (var k = 0; k++; k < strs.length) {
            //如果匹配到了，continue
            if (strs[k].indexOf(minStr)) {

            } else { //未匹配到直接break return了
                break;
            }

        }
    }
};

module.exports = longestCommonPrefix;