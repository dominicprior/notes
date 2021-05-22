Jekyll seems to do two main things:

- Translate any .md files into .html

- Reuse stuff using *layouts* that include the *contents*.

It doesn't seem to require a _config.yml file.

As well as translating md to html, it also translates scss to css.

It is worth putting this in the `<head>`:
```html
<head>
  <meta charset="UTF-8">
</head>
```
Here's an example of using *Liquid*:
```html
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
```
