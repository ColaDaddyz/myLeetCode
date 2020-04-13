/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
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

module.exports = longestCommonPrefix;