# notes

Here are some random notes while I learn JavaScript.

I'm learning from https://javascript.info/, which looks like the JavaScript equivalent of https://docs.python.org/3/tutorial/index.html.

## Things that are better in JavaScript than in Python

The Chrome console seems more friendly than the Python command prompt.  For example, multiline input with shift+enter looks neat.

## Gotchas

JavaScript sometimes [fails to assume a semicolon](https://javascript.info/structure#semicolon) where it is really needed.  Here's an example:
```
alert("There will be an error")
[1, 2].forEach(alert)
```
JavaScript does not assume a semicolon before square brackets.
