/**
 * Created by zhangzhe on 2017/2/15.
 */
require('should');
var longestCommonPrefix = require('../Algorithms/Longest-Common-Prefix');
describe('longestCommonPrefix', function () {
    it('有非string', function () {
        longestCommonPrefix(["123", 1]).should.be.eql('')
    });
    it('有公共串', function () {
        longestCommonPrefix(["123", '123', '12']).should.be.eql('12')
    })
    it('无公共串', function () {
        longestCommonPrefix(["123", '21', '12']).should.be.eql('')
    })
});