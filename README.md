# PostCSS Disabled [![Build Status][ci-img]][ci]

[PostCSS] plugin to add disabled attributes and disabled classes when the :disabled pseudo class is present..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/cocco3/postcss-disabled.svg
[ci]:      https://travis-ci.org/cocco3/postcss-disabled

```css
.foo:disabled {
  background-color: #f9f9f9;
}
```

```css
.foo:disabled,
.foo[disabled] {
  background-color: #f9f9f9;
}
```

## Usage

```js
postcss([ require('postcss-disabled') ])
```

See [PostCSS] docs for examples for your environment.

## Options

### addAttribute
type: `Boolean`
default: `true`
Adds the [disabled] attribute selector

```css
.foo:disabled {
  background-color: #f9f9f9;
}
```

```css
.foo:disabled,
.foo[disabled] {
  background-color: #f9f9f9;
}
```

### addClass
type: `Boolean`
default: `false`
Adds a .disabled class

```css
.foo:disabled {
  background-color: #f9f9f9;
}
```

```css
.foo:disabled,
.foo.disabled {
  background-color: #f9f9f9;
}
```
