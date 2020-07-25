---
layout: page
title: Tags
permalink: /tags/
---

{% for tag in site.tags %}
  <h3>{{ tag[0] }}</h3>
  <ul class="recipes">
    {% for recipe in tag[1] %}
      <li>{% include recipe-preview.html recipe=recipe %}</li>
    {% endfor %}
  </ul>
{% endfor %}