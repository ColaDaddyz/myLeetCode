/**
 * Created by zhangzhe on 2017/3/4.
 */
require('should');
var lengthOfLastWord = require('../Algorithms/Length-of-Last-Word');
describe('test', function () {
    it('a ', function () {
        lengthOfLastWord('a ').should.be.eql(1);
    });
    it('a bbb', function () {
        lengthOfLastWord('a bbb').should.be.eql(3);

    });
    it('', function () {
        lengthOfLastWord('').should.be.eql(0);
    })
});