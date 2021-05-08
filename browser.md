These are notes from https://javascript.info/ui.

The root object is the `window`.  It represents the “browser window” and provides methods to control it.

The DOM represents all page content as objects that can be modified.

The `document` is the main “entry point” to the page.

The backbone of an HTML document is tags.  Every HTML tag is an object.  For example, `document.body` represents the `<body>` tag.

Tags are *element nodes* (or just elements) and form the tree structure.
The text inside elements forms *text nodes*.  A text node contains only a string.
It may not have children and is always a leaf of the tree.

Browsers do autocorrection.  For example, `hello` get changed to `<html><head></head><body>hello</body></html>`.

Everything in HTML, even comments, becomes a part of the DOM.

`elem.querySelectorAll(css)` returns (as a static collection) all elements inside `elem` matching the given CSS selector.

`console.dir(elem)`.

`document.body.innerHTML += 'foo'` is a complete overwrite.  There's also `outerHTML`.

`elem.textContent = .....` inserted “as text”, so all symbols are treated literally, but maybe this is better: `myTextNode.data = .....`.

Typically HTML tags attributes are available as JavaScript properties.  For example, `<body id="a">` gives `document.body.id === 'a'` and
`document.body.getAttribute['id'] === 'a'`.  But note that the properties and attributes can be different.  Properties are usually
better than attributes (as well as being shorter).  See https://javascript.info/dom-attributes-and-properties.

We can add elements with `append`, `prepend`, `before` and `after`.

It's important to start with `<!DOCTYPE HTML>`.

We can add our own attributes to HTML elements.  See, for example, https://javascript.info/event-delegation#behavior-counter.
