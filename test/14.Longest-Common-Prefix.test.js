/**
 * Created by zhangzhe on 2017/2/4.
 */
require('should');
var LCP = require('../Algorithms/14.Longest-Common-Prefix');
describe('LCP', function() {
    it("正常case", function() {
        LCP(["a"]).should.be.eql("a")
    });

});