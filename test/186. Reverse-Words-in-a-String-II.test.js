/**
 * Created by zhangzhe on 2017/2/4.
 */
require('should');
var testFunc = require('../Algorithms/186. Reverse-Words-in-a-String-II');
describe('LCP', function() {
    it("正常case", function() {
        testFunc(["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]).should.be.eql(["b", "l", "u", "e", " ", "i", "s", " ", "s", "k", "y", " ", "t", "h", "e"])
    });
});