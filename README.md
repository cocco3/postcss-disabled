> [!IMPORTANT]
> This plugin was originally created at a time when [:disabled](https://caniuse.com/?search=%3Adisabled) was not supported in all popular browsers.
>
> You likely no longer need this plugin, but just in case, it has been updated to support PostCSS v8.

# PostCSS Disabled

[PostCSS](https://github.com/postcss/postcss) plugin to add a disabled attribute
and/or a disabled class when the `:disabled` pseudo class is present.

```css
/* Input */
.foo:disabled {
  background-color: #f9f9f9;
}
```

```css
/* Output */
.foo:disabled,
.foo[disabled] {
  background-color: #f9f9f9;
}
```

## Usage

See [PostCSS usage docs](https://github.com/postcss/postcss#usage) for your specific environment.

```js
plugins: [
  require('postcss-disabled')({
    addAttribute: true,
    addClass: true,
  }),
];
```

## Options

### addAttribute

- type: `Boolean`
- default: `true`
- Adds a `[disabled]` attribute selector

```css
/* Input */
.foo:disabled {
  background-color: #f9f9f9;
}
```

```css
/* Output */
.foo:disabled,
.foo[disabled] {
  background-color: #f9f9f9;
}
```

### addClass

- type: `Boolean`
- default: `false`
- Adds a `.disabled` class selector

```css
/* Input */
.foo:disabled {
  background-color: #f9f9f9;
}
```

```css
/* Output */
.foo:disabled,
.foo.disabled {
  background-color: #f9f9f9;
}
```

## Contributing

- [Writing a PostCSS plugin](https://github.com/postcss/postcss/blob/main/docs/writing-a-plugin.md)
