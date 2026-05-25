---
layout: page
title: Essays
lang: en
---

{% for essay in site.essays %}
- [{{ essay.title }}]({{ essay.url }}){% if essay.date %} · {{ essay.date | date: '%Y%m%d' }}{% endif %}
{% endfor %}
