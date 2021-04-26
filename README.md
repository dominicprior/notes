Here are some random notes while I learn JavaScript.

I'm learning from https://javascript.info/, which looks like the JavaScript equivalent of https://docs.python.org/3/tutorial/index.html.

## Gotchas

JavaScript sometimes [fails to assume a semicolon](https://javascript.info/structure#semicolon) where it is really needed.  Here's an example:
```
alert("There will be an error")
[1, 2].forEach(alert)
```
JavaScript does not assume a semicolon before square brackets.

`'foo' / 3` doesn't raise an exception.  Instead, it just returns `NaN`.

## Quirks

`"use strict"` is a welcome guest at the top of our scripts. Later, when our code is all in classes and modules, we may omit it.

`const bigInt = 1234567890123456789012345678901234567890n`.

`typeof alert` gives `"function"` even though `alert` is an object.

`Number('')` and `Number(null)` both give `0`.

`1 << 32` is `1`.

## Nice sections in javascript.info

https://javascript.info/variables#name-things-right

## Nice bits

`the result is ${2 + 2}`

The Chrome console allows multiline input with shift+enter.

## Other stuff

The special `null` value forms a separate type of its own which contains only the `null` value.

The special value `undefined` also stands apart. It makes a type of its own, just like `null`.

`alert`, `prompt`, `confirm`.

`String(4)`, `Number('  4  ')`, `Number(true)`, `+'4'`.

Values that are intuitively “empty”, like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`.

But `Boolean(' ')` and `Boolean('0')` both give `true`.

`3` and `3.0` are the same (unlike in Python).

`1 +'2'` and `'1' + 2` are both `'12'`.
