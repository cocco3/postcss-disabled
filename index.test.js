'use strict'

const postcss = require('postcss')
const plugin = require('./')

const check = async (input, output, options) => {
    const from = 'example.css'
    const result = await postcss([plugin(options)]).process(input, { from })

    expect(result.css).toEqual(output)
    expect(result.warnings()).toHaveLength(0)
}

describe('postcss-disabled', () => {
    it('default behavior, no options', () => {
        return check(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }'
        )
    })

    it('addAttributes: true', () => {
        return check(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
            { addAttribute: true }
        )
    })

    it('addAttributes: false', () => {
        return check(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled { background-color: #f9f9f9; }',
            { addAttribute: false }
        )
    })

    it('addClass: true', () => {
        return check(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo.disabled, .foo[disabled] { background-color: #f9f9f9; }',
            { addClass: true }
        )
    })

    it('addClass: false', () => {
        return check(
            '.foo:disabled { background-color: #f9f9f9; }',
            '.foo:disabled, .foo[disabled] { background-color: #f9f9f9; }',
            { addClass: false }
        )
    })
})
