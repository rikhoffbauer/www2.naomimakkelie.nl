---
layout: gallery
title: Work
#permalink: /gallery
permalink: /
redirect_from:
  - /gallery
order: 1
---

{% assign image_files = site.static_files | where: "image", true %}

{% for myimage in image_files %}
  <figure>
    <img src="{{ myimage.path }}" alt="{{ myimage.title }}" />
    <figcaption>
      <pre>{{ myimage.description }}</pre>
    </figcaption>
  </figure>
{% endfor %}

