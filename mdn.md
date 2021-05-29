These are some notes while learning from https://developer.mozilla.org/en-US/.

Always include this:

```html
<meta name="viewport" content="width=device-width,initial-scale=1">
```

```css
p, h2 {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

```css
html {
  font-size: 10px;
  font-family: "Open Sans", sans-serif;
}
```

> Something you'll notice about writing CSS: a lot of it is about boxes.

```css
img {
  display: block;
  margin: 0 auto;
}
```

```html
<link rel="stylesheet" href="styles.css">
```

```css
p:first-child {
  color: red;
}
```

```css
.box {
  width: calc(90% - 30px);
  transform: rotate(0.8turn);
}
```

```css
.foo {
    color: inherit;
}
```

```css
.foo {
    all: unset;
}
```

```css
h1 + p::first-letter {
  color: red;
  font-size: 150%;
}
```

Specificity scores are in thousands, hundreds, tens, and ones!

```css
:nth-child(4n) {
  color: lime;
}
```

```css
.better {
    border: none !important;
}
```

```css
a[title] { .....
```

```css
a[href="https://example.com"] { .....
```

```css
p::first-line { .....
```

```css
* { .....
```

```css
article:first-child { .....
```

```css
article :first-child { .....  /* note the space */
```

```css
article *:first-child { .....
```

```css
span.foo { .....
```

```css
.foo.bar { .....
```

```css
p[class~="special"] { .....
```

```css
p[class^="special"] { .....
```

```css
p[class$="special"] { .....
```

```css
p[class*="special"] { .....
```

```css
p[class*="special" i] { .....
```

```css
a:hover { ...
```

```css
.foo:focus { ...
```

```css
.foo::before {
  content: "bla bla"
```

```css
::selection {
  background-color: lightblue;
```

```css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```
