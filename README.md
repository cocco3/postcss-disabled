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

See [PostCSS docs](https://github.com/postcss/postcss#usage) for examples for your environment.

```js
postcss([require('postcss-disabled')]);
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
