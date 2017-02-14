/**
 * Created by zhangzhe on 2017/2/4.
 */
require('should');
var twoSum = require('../Algorithms/Two-Sum.js');
describe('Two-Sum', function () {
    it("正常case", function () {
        twoSum([1, 2, 3, 5], 4).should.be.eql([0, 2])
    });
    it("有两个相等的值", function () {
        twoSum([1, 3, 3, 5], 8).should.be.eql([1, 3])
    })
});

