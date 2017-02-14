require('should');
var reverse = require('../Algorithms/Reverse-Integer');
describe('Reverse-Integer', function () {
    it("正数", function () {
        reverse(123).should.be.eql(321)
    });
    it("负数", function () {
        reverse(-123).should.be.eql(-321)
    });
    it("0", function () {
        reverse(0).should.be.eql(0)
    });
    it("超出范围", function () {
        reverse(12321312313123123).should.be.eql(0)
    })
});

