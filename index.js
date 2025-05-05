/**
 * @type {import('postcss').PluginCreator}
 */
module.exports = (opts = {}) => {
  const defaultOptions = {
    addAttribute: true,
    addClass: false,
  };

  opts = Object.assign({}, defaultOptions, opts);

  return {
    postcssPlugin: 'postcss-disabled',

    Root(root) {
      root.walkRules((rule) => {
        if (rule.selector.includes(':disabled')) {
          const disabledSelectors = [];

          rule.selectors.forEach((selector) => {
            if (selector.includes(':disabled')) {
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
            rule.selectors = [
              ...new Set([...rule.selectors, ...disabledSelectors]),
            ];
          }
        }
      });
    },
  };
};

module.exports.postcss = true;
