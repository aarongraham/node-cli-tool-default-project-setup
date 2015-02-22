var expect = require("chai").expect;
var lib = require('../lib/lib.js');

describe('foo', function() {
    it('should return the args that are passed in', function() {
        expect(lib.foo('foo')).to.be.equal('foo');
    });
});