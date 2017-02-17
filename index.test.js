var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('./');

var test = function (input, output, opts, done) {
    postcss([ plugin(opts) ]).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        done();
    }).catch(done);
};

describe('postcss-disabled', function () {
    it('default', function (done) {
        test(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled,.foo[disabled] { background-color: #f9f9f9; }',
            {},
            done);
    });
});
