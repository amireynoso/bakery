---
layout: page
title: Latest recipes
permalink: /recipes/
---

{% assign recipes = site.posts | sort: 'date' | reverse %}

<ul class="recipes">
  {% for recipe in recipes %}
    <li>{% include recipe-preview.html recipe=recipe %}</li>
  {% endfor %}
</ul>