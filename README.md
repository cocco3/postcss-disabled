# PostCSS Disabled [![Build Status][ci-img]][ci]

[PostCSS] plugin to add disabled attributes and disabled classes when the :disabled pseudo class is present..

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/cocco3/postcss-disabled.svg
[ci]:      https://travis-ci.org/cocco3/postcss-disabled

```css
.foo:disabled {
  color: gray;
}
```

```css
.foo:disabled,
.foo[disabled] {
  color: gray
}
```

## Usage

```js
postcss([ require('postcss-disabled') ])
```

See [PostCSS] docs for examples for your environment.

## Options

### addAttributes
type: `Boolean`
default: `true`
Adds the [disabled] attribute selector

```css
.foo:disabled {
  color: gray;
}
```

```css
.foo:disabled,
.foo[disabled] {
  color: gray
}
```

### addClass
type: `Boolean`
default: `false`
Adds a .disabled class

```css
.foo:disabled {
  color: gray;
}
```

```css
.foo:disabled,
.foo.disabled {
  color: gray
}
```
