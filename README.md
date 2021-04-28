Here are some random notes while I learn JavaScript.

I'm learning from https://javascript.info/, which looks like the JavaScript equivalent of https://docs.python.org/3/tutorial/index.html.

## Gotchas

JavaScript sometimes [fails to assume a semicolon](https://javascript.info/structure#semicolon) where it is really needed.  Here's an example of JavaScript not assuming a semicolon before square brackets.
```
alert("There will be an error")
[1, 2].forEach(alert)
```

`'foo' / 3` doesn't raise an exception.  Instead, it just returns `NaN`.

JavaScript adds a `;` after this `return`:
```
return
 (some + stuff)
```

## Quirks

`"use strict"` puts us into modern JavaScript, as does using any classes or modules.

`const bigInt = 1234567890123456789012345678901234567890n`.

`typeof alert` gives `"function"` even though `alert` is an object.

`Number('')` and `Number(null)` both give `0`.

`1 << 32` is `1`.

If a function parameter is not provided, then its value becomes `undefined`, rather than throwing an exception.

## Nice sections in javascript.info

https://javascript.info/variables#name-things-right

## Nice bits

`` `The result is ${2 + 2}` ``

The Chrome console allows multiline input with shift+enter.

`a ?? b` is `a` if `a` isn't `null` or `undefined` and `b` otherwise.

`for (let i = 0; i < 3; i++)`.

Both switch and case allow arbitrary expressions.

`function f(x = someDefaultValue) { ... }`.

`function f(x) { x ??= someDefaultValue; ... }`.

`[u,v] = [3,4]`.

The string representation of a function is its source code.

`x => 2*x`.

https://javascript.info/while-for#labels-for-break-continue.

This isn't JavaScript-specific but still a neat example: https://javascript.info/function-basics#functions-comments.

https://javascript.info/testing-mocha.

https://javascript.info/polyfills.

## Other stuff

The special `null` value forms a separate type of its own which contains only the `null` value.

The special value `undefined` also stands apart. It makes a type of its own, just like `null`.

`alert`, `prompt`, `confirm`.

`String(4)`, `Number('  4  ')`, `Number(true)`, `+'4'`.

Values that are intuitively “empty”, like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`.

But `Boolean(' ')` and `Boolean('0')` both give `true`.

`3` and `3.0` are the same (unlike in Python).

`1 +'2'` and `'1' + 2` are both `'12'`.

`function f() { g() }` is the same as `f = function() { g() }`, except the first one (the function declaration) can be called earlier than when it is defined.

Switch statements uses `===` (strict equality) for comparisons.

https://javascript.info/coding-style#automated-linters.

https://javascript.info/comments#good-comments.

## Objects

`{}` is the same as `new Object()`.

Object properties are always strings.

Iterating over objects gives the integer keys (strings that look like integers) in numerical order and then the other keys in insertion order.

`{[x]: 3}` is an example of a computed property.  There is also `{f() { ... }}`.

`{x}` is an object with key 'x' and value x.

`key in obj`.

`for (let k in obj) ...`.

`({name: 'fred', f() {return this.name}}).f()` gives `'fred'`.

`({name: 'fred', f: () => this.name}).f()` gives `''`.

