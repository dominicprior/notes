These are some notes while learning from https://developer.mozilla.org/en-US/.

Technologies -> CSS .....

## CSS basics

https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics

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

## Learn to style HTML using CSS

## CSS first steps

https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps

## What is CSS?

https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS

## Getting started with CSS

https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started

## How CSS is structured

https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured

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
