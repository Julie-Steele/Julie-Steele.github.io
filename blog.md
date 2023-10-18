---
layout: default
title: Blog
---

# Blog Posts

{% for post in site.blog %}
## [{{ post.title }}]({{ post.url }})
- Date: {{ post.date | date: "%Y-%m-%d" }}
- ![{{ post.title }} Image]({{ post.image }})
---

{% endfor %}

