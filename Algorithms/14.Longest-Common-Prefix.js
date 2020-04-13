/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function(strs) {
    var output = "";
    var shortest = strs.reduce(function(shortOne, current) {
        if (shortOne.length < current.length) {
            return shortOne
        }
        return current
    }, strs[0]);
    for (let i = 1; i <= shortest.length; i++) {
        let sub = shortest.substring(0, i);
        let allMatch = strs.every(item => {
            return item.substr(0, i) === sub
        })
        if (allMatch) {
            output = sub;
        } else {
            break;
        }
    }
    return output

};
/**
 * 对方法一做优化，主要考虑：
 * 1、所有遍历都应该在最短的地方停止了，所以没必要找最短的
 * @param {*} strs 
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    var prefix = strs[0];
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return ""
        }
    }
    return prefix;
};

module.exports = longestCommonPrefix;