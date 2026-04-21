---
layout: page
title: More
lang: en
---

<ul class="posts">
{% assign pages = site.pages | sort: 'title' %}
{% for p in pages %}
  {% if p.title and p.url != page.url %}
    {% unless p.url contains '_drafts' or p.url contains 'feed' or p.url contains '404' or p.url contains 'README' %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
    {% endunless %}
  {% endif %}
{% endfor %}
</ul>
