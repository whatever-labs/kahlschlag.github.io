---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<link rel="stylesheet" href="assets/command.css">

{% assign scopes = site.commands | map: "scope" | uniq %}

<div class="filterbox">
<span>Scopes:</span>
<button class="scopeButton" scope="all">All</button>
{% for scope in scopes %}
<button class="scopeButton" scope="{{scope }}">
 {{ scope }}
</button>
{% endfor %}
</div>


{% for command in site.commands %}
  {%- include command.html -%}
{% endfor %}


<script src="assets/scopeFilter.js">
