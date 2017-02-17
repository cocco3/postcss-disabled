var postcss = require('postcss');

var plugin = require('./');

var test = function (input, output, opts) {
    return postcss([ plugin(opts) ]).process(input)
        .then(function (result) {
            expect(result.css).toEqual(output);
            expect(result.warnings().length).toBe(0);
        });
};

describe('postcss-disabled', function () {

    it('default behavior, no options', function () {
        return test(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
            {}
        );
    });

    it('addAttributes: true', function () {
        return test(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
            { addAttribute: true }
        );
    });

    it('addAttributes: false', function () {
        return test(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled { background-color: #f9f9f9; }',
            { addAttribute: false }
        );
    });

    it('addClass: true', function () {
        return test(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo.disabled, .foo[disabled] { background-color: #f9f9f9; }',
            { addClass: true }
        );
    });

    it('addClass: false', function () {
        return test(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
            { addClass: false }
        );
    });

});
