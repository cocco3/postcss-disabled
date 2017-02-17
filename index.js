var postcss = require('postcss');

module.exports = postcss.plugin('postcss-disabled', function (opts) {

    opts = opts || {
        addAttributes: true,
        addClass: false
    };

    return function (root) {

        root.walkRules(function (rule) {

            if (rule.selector.indexOf(':disabled') !== -1) {

                var disabledSelectors = [];

                rule.selectors.forEach(function (selector) {

                    if (selector.indexOf(':disabled') !== -1) {

                        if (opts.addClass) {
                            disabledSelectors.push(
                                selector.replace(/:disabled/g, '.disabled')
                            );
                        }

                        if (opts.addAttribute) {
                            disabledSelectors.push(
                                selector.replace(/:disabled/g, '[disabled]')
                            );
                        }
                    }
                });

                if (disabledSelectors.length) {
                    rule.selectors = rule.selectors.concat(disabledSelectors);
                }
            }
        });

    };
});
