---
layout: default
title: Thoughts
---

# Thoughts Posts

{% for post in site.Thoughts %}
<div style="display: flex; align-items: start;">
    <div style="flex-grow: 1;">
        <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
        <p>Date: {{ post.date | date: "%Y-%m-%d" }}</p>
    </div>
    <div>
        <a href="{{ post.url }}">
            <img src="{{ '/imgs/' | append: post.image }}" alt="{{ post.title }} Image" style="max-width:100px; max-height:100px;" />
        </a>
    </div>
</div>
<hr>
{% endfor %}
