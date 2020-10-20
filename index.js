'use strict'

const defaultOptions = {
    addAttribute: true,
    addClass: false
}

module.exports = opts => {
    opts = {
        ...defaultOptions,
        ...opts
    }

    return {
        postcssPlugin: 'postcss-disabled',

        Once (root) {
            root.walkRules(rule => {
                if (rule.selector.includes(':disabled')) {
                    let disabledSelectors = []

                    for (let selector of rule.selectors) {
                        if (selector.includes(':disabled')) {
                            if (opts.addClass) {
                                disabledSelectors.push(
                                    selector.replace(/:disabled/g, '.disabled')
                                )
                            }

                            if (opts.addAttribute) {
                                disabledSelectors.push(
                                    selector.replace(/:disabled/g, '[disabled]')
                                )
                            }
                        }
                    }

                    if (disabledSelectors.length) {
                        rule.selectors = rule.selectors.concat(
                            disabledSelectors
                        )
                    }
                }
            })
        }
    }
}

module.exports.postcss = true
