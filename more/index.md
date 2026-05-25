---
layout: page
title: More
lang: en
---

<ul class="bulleted">
{% assign pages = site.pages | sort: 'url' %}
{% for p in pages %}
     {% unless p.url contains '_drafts' or p.url contains 'feed' or p.url contains '404' or p.url contains 'posts' or p.url contains 'more' or p.url contains 'tags' or p.url contains 'README' or p.url contains 'page' %}
  <li><a href="{{ p.url }}"{% if page.url == p.url %} class="current"{% endif %}>{{ p.title }}</a></li>
    {% endunless %}
{% endfor %}
</ul>