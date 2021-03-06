Here are some random notes while I learn JavaScript.

I'm learning from https://javascript.info/, which looks like the JavaScript equivalent of https://docs.python.org/3/tutorial/index.html.

## Gotchas

JavaScript sometimes [fails to assume a semicolon](https://javascript.info/structure#semicolon) where it is really needed.  Here's an example of JavaScript not assuming a semicolon before square brackets.
```js
alert("There will be an error")
[1, 2].forEach(alert)
```

`'foo' / 3` doesn't raise an exception.  Instead, it just returns `NaN`.

JavaScript adds a `;` after this `return`:
```js
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

Functions have properties, for example `name` and `length`.

Function expressions can have internal names, which can be useful for recursion:
```
(function f(n) { return n == 0 ? 1 : n * f(n-1) })(3)
```

`new Function('a', 'b', 'return a + b')`.

```js
function hash() {
  return [].join.call(arguments);  // method borrowing
}
```

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

https://javascript.info/closure.

```js
function makeCounter() {
  let count = 0;
  return [function() { return ++count; },
          function() { return --count; }];
}
let [up,down] = makeCounter();  // the up and down functions share the same count.
```

## Other stuff

The special `null` value forms a separate type of its own which contains only the `null` value.

The special value `undefined` also stands apart. It makes a type of its own, just like `null`.

`alert`, `prompt`, `confirm`.

`String(4)`, `Number('  4  ')`, `Number(true)`, `+'4'`.

Values that are intuitively ???empty???, like `0`, an empty string, `null`, `undefined`, and `NaN`, become `false`.

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

In a browser there is the global called `window`.  All properties of the global object can be accessed directly.  For example: `window.alert == alert`.

Nested `setTimeout` is more flexible than `setInterval`.

In the browser, there???s a limitation of how often nested timers can run. The HTML5 standard says: ???after five nested timers, the interval is forced to be at least 4 milliseconds.???.

Properties have `writable`, `enumerable` and `configurable` flags and can also have custom getters and setters.

`rabbit.__proto__ = animal` sets the superclass for an individual object.

`Rabbit.prototype = animal` sets the superclass for all objects that are then created via the `Rabbit` constructor.

By default, all functions have `func.prototype.constructor === func`.

`for (x in rabbit)` gives `rabbit` and `animal` properties.  `Object.keys(rabbit)` only gives the `rabbit` properties.  Neither give the `Object` properties.

`Object.assign(dest, src1, src2, ...)` copies all the properties to the `dest` object.

`try` and `catch` all seem fairly standard.

```js
function* generateSequence() { yield 1; yield 2; return 3; }
```

## Objects

`{}` is the same as `new Object()`.

Object properties are always strings.

Iterating over objects gives the integer keys (strings that look like integers) in numerical order and then the other keys in insertion order.

`{[x]: 3}` is an example of a computed property.  There is also `{f() { ... }}`.

`{x}` is an object with key 'x' and value x.

`key in obj`.

`for (let k in obj) ...`.

```js
function User(name) { this.name = name }
user = new User('fred')
```

## Inheritance

If a property for `obj` is missing, JavaScript will look in `obj.__proto__`.  (`__proto__` is a historical getter/setter for `[[Prototype]]`).

If `F.prototype` is an object, then `new F` sets `[[Prototype]]` to `F.prototype`.  See https://javascript.info/function-prototype.

For example, `document.body.__proto__ === HTMLBodyElement.prototype` and `document.body.__proto__.__proto__ === HTMLElement.prototype`.

`Element.prototype.aaa = 'bbb'`.  Then `document.body.aaa === 'bbb'`.  See the class hierarchy here: https://javascript.info/basic-dom-node-properties.

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
```js
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

`[x, y, ...rest] = b`.  Similar to `(x, y, ...rest) => .....`.  Also `Math.max(...a, x, ...b)` and `[...a, ...b]` and `[...str]` and `{...obj}`.

`[x = myDefault, y] = a`.

`{u, v} = obj` is the same as `u = obj.u ; v = obj.v`.  But see the variable scope gotcha in https://javascript.info/destructuring-assignment#the-rest-pattern.

This sort of destructuring can be useful for APIs with loads of optional arguments.  https://javascript.info/destructuring-assignment#smart-function-parameters.

## this

The `this` inside a non-arrow function is evaluated at call time and does not depend on where the method was declared, but rather on what object is ???before the dot???.

Consider this simple function `function f() { return this }`.  Then `f() === undefined`.  (When in non-strict mode (and therefore at the Chrome console), `f() === windows`).

Now consider this simple object `u = {g: f}` and note that `u.g === f` but that `u.g() === u`.

The `this` inside an arrow function, on the other hand, seems to be set at definition time, contrary to what it says [here](https://javascript.info/object-methods#arrow-functions-have-no-this).

```js
"use strict";
const a = () => this;
let user = {
  sayHi() {
	const aa = () => this;
	console.log(a());   // window
	console.log(aa());  // user
  }
};
user.sayHi();
```

The result of `func.bind(context)` is a special function-like ???exotic object???, that is callable as a function and transparently passes the call to `func` setting `this=context`.

`bind` can also create partial functions:

```
function mul(x, y) { return x * y }
triple = mul.bind(null, 3)
```

There's also `f.apply(myThis, argList)` and `func.call(myThis, .....)`.

The keyword `arguments` can be used like this:

```js
let wrapper = function() {
  return func.apply(this, arguments);
};
```

## Classes

After classes were added in 2015, JavaScript's object-orientation was still [prototype-based](https://en.wikipedia.org/wiki/JavaScript#Object-orientation_(prototype-based)).

As Douglas Crockford says:

> You make prototype objects, and then ??? make new instances. Objects are mutable in JavaScript, so we can augment the new instances, giving them new fields and methods. These can then act as prototypes for even newer objects. We don't need classes to make lots of similar objects??? Objects inherit from objects. What could be more object oriented than that?

With or without the new *class* syntax, JavaScript is still at heart a functional programming language, thanks to its influence from Scheme.

Here are some bits of syntax.

```js
class C { f() { ..... } }
c = new C()
c.f()
c.constructor.name === 'C'  // i.e. the same as before classes were invented.
c instanceof C === true     // Also the same as before.

D = class { ..... }

class E {
  .....
  get x() { return ..... }
  set x(value) { ..... }
}
e = new E()
e.x

class F {
  x = 3
  static y = 4
}

class Rabbit extends Animal {  // We can also extend builtin classes like Array.
  f() { super.f(); ..... }  // But note that arrow functions don't have a super.
}
```

## Promises

`p = new Promise(function(resolve, reject) { ..... })`.

The function passed to the Promise constructor is called the *executor*.  The executor runs straight away.  `resolve` and `reject` are functions the executor can call to indicate success or failure.

```js
p = new Promise(function(resolve, reject) {
})
p  // a pending promise

p = new Promise(function(resolve, reject) {
  resolve('Yay!')
})
p  // a fulfilled promise

p = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
})
p  // pending, but 5 seconds later it will be fulfilled.

p = new Promise(function(resolve, reject) {
  resolve('Yay!')
})
p.then(result => console.log('Yes: answer = ' + result),
       error  => console.log('oops!'))

p = new Promise(resolve => {
  setTimeout(() => resolve("done!"), 1000)
})
p.then(console.log); // shows "done!" after 1 second

p = new Promise(resolve => { resolve('Yay!') })
p.then(console.log)
p.then(console.log)  // We can call then multiple times

delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

new Promise(resolve => resolve(10)).then(x => 2*x).then(x => 2*x)

https://javascript.info/microtask-queue
```

## Async/await

It's all amazingly neat.

https://javascript.info/async-await

`async function f() {return 3}` returns a promise.  Or `f = async () => 3`.

https://javascript.info/async-await#error-handling

## Modules

A module is just a file.

```js
export function f() { ..... }
export let admin = { name: "John" }
```

```js
import {f} from './foo.js'  // Assigns exported function f to the corresponding variable.
```

```html
<script type="module">
```

Note: modules work only via HTTP(s), not in local files.

Each module has its own top-level scope.

> In real-life, browser modules are rarely used in their ???raw??? form.
> Usually, we bundle them together with a special tool such as Webpack and deploy to the production server.

## Sections I've skipped

https://javascript.info/symbol

https://javascript.info/object-toprimitive

https://javascript.info/weakmap-weakset

https://javascript.info/date

https://javascript.info/prototype-methods

https://javascript.info/private-protected-properties-methods

https://javascript.info/generators-iterators

https://javascript.info/async-iterators-generators

https://javascript.info/import-export

https://javascript.info/modules-dynamic-imports

https://javascript.info/js-misc
