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

Maps don't work properly with `[]` syntax.  Use `get` and `set` instead.

## Missing bits

Operator overloading.

Getting the last element with `[-1]`.  But there is `x.slice(-1)`.

## Quirks

`"use strict"` puts us into modern JavaScript, as does using any classes or modules.

`const bigInt = 1234567890123456789012345678901234567890n`.

`typeof alert` gives `"function"` even though `alert` is an object.

`Number('')` and `Number(null)` both give `0`.

`1 << 32` is `1`.

If a function parameter is not provided, then its value becomes `undefined`, rather than throwing an exception.

`42..toString(2)` or `(42).toString(2)` or `42 .toString(2)` but not `42.toString(2)`.

`if (~str.indexOf('foo')) { // found it!`.  The `~` is the *bitwise not* operator, and `~-1` is `0`.  These days people use `str.include('foo')`.

Iteration over maps is in insertion order.

## Nice sections in javascript.info

https://javascript.info/variables#name-things-right

## Nice bits

`` `The result is ${2 + 2}` ``

The Chrome console allows multiline input with shift+enter.  It also has syntax highlighting and auto completion.

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

`user.address?.street`.  Also `undefined?.['foo']` and `undefined?.()`.

`1_000_000`.

`0.1.toFixed(20)` for diagnosing rounding errors.

`parseInt('100px')`.

`parseInt('0xff', 16)`.

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

`str.length`.

Strings are immutable.

`str.substr(start, length)`.  `str.substring(start, end)`.  `str.slice(start, end)`.  `slice` is the best because it works for lists too and because it allows negative arguments.

`JSON.stringify(foo, myFn, '  ')`.

`JSON.parse(str)`.

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
```
function User(name) { this.name = name }
user = new User('fred')
```

## Arrays

Like in Perl, elements can be added off the end of an array: `a = [7] ; a[1] = 8`.  There is also `push`, `pop`, `shift` and `unshift`.

Arrays can have properties: `a = ['p'] ; a.foo = 'q'`.  Note that `for (x in a)` gives both `'0'` and `'foo'`.  Therefore, we usually want `for (x of a)`, which gives `'p'`.

`a.length` is writable.  For example, `a.length = 0` clears the array.

`new Array(10)` creates an array of ten `empty` values, where `empty` is slightly different to `undefined`.

The Swiss army knife for arrays is `splice` (not to be confused with `slice`, which returns a new sub-array and which also works on strings).  The syntax is `arr.splice(start[, deleteCount, elem1, ..., elemN])`.

`["Bilbo", "Gandalf"].map(item => item.length)`.  But, unlike in Haskell, the function also receives the index and the array.  For example, we can write this: `["Bilbo", "Gandalf"].map((item, index, array) => .....)`.  There's also `reduce` and `reduceRight`.  And `every` and `some` (corresponding to Haskell's `all` and `any`).

`["Bilbo", "Gandalf"].filter(item => item.length == 5)`.  There are also various search functions.

`arr.sort((a, b) => a - b)`.

https://javascript.info/array-methods

## Iterables

Objects that can be used in `for..of` are called *iterable*.  They have a `Symbol.iterator` property that gives an object with a `next` function.
```
range = {[Symbol.iterator]: function() { return {
  current: 1,
  next() {
    if (this.current <= 3) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true } } } } } }
```
`Array.from(range)` or `Array.from(range, x => x*x)`.

Maps, set and arrays have `keys()`, `values()` and `entries()` iterator methods.

## Destructuring

`[x, , z] = a`.

`[x, y, ...rest] = b`.

`[x = myDefault, y] = a`.

`{u, v} = obj` is the same as `u = obj.u ; v = obj.v`.  But see the variable scope gotcha in https://javascript.info/destructuring-assignment#the-rest-pattern.

This sort of destructuring can be useful for APIs with loads of optional arguments.  https://javascript.info/destructuring-assignment#smart-function-parameters.

## Sections I've skipped

https://javascript.info/symbol

https://javascript.info/object-toprimitive

https://javascript.info/weakmap-weakset

https://javascript.info/date
