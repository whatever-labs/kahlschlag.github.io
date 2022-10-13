---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

{% for command in site.commands %}
  <h2>{{ command.scope }}</h2>
  <p>{{ command.content | markdownify }}</p>
{% endfor %}