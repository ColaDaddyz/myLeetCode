/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var pre = 0, next = 0;
    var obj = {};
    nums.forEach(function (item, index) {
        obj[item] = index + 1;
    });
    for (var i = 0; i < nums.length; i++) {
        pre = i;
        var now = nums[i];
        var minus = target - now;
        var nextIndex = obj[minus];
        if (nextIndex && nextIndex !== i + 1) {
            next = nextIndex - 1;
            break;
        }
    }
    return [pre, next]
};