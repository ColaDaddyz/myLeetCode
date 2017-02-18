/**
 * Created by zhangzhe on 2017/2/15.
 */
require('should');
var longestCommonPrefix = require('../Algorithms/Longest-Common-Prefix');
describe('longestCommonPrefix', function () {
    it('有非string', function () {
        longestCommonPrefix(["123", 1]).should.be.eql('')
    })
});