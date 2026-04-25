---
layout: page
title: More
lang: en
---

 <ul id="columnlist">
{% assign pages = site.pages | sort: 'url' %}
{% for p in pages %}
  {% if p.title and p.url != page.url %}
    {% unless p.url contains '_drafts' or p.url contains 'feed' or p.url contains '404' or p.url contains 'README' %}
  <li><a href="{{ p.url }}">{{ p.title }}</a></li>
    {% endunless %}
  {% endif %}
{% endfor %}
</ul>




<h2>Notes</h2>
<ul>
{% for post in site.posts %}
{% if post.category == "post" %}
<li><a href="{{ post.url }}">{{ post.title }}</a> · {{ post.tags }}</li>
{% endif %}
{% endfor %}  
</ul>