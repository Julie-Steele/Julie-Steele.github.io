---
layout: default
title: Thoughts
---

# Thoughts

<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
    {% for post in site.thoughts %}
    <div style="border: 1px solid #ddd; padding: 10px;">
        <a href="{{ post.url }}">
            <img src="{{ post.image }}" alt="{{ post.title }} Image" style="max-width: 100%; max-height: 200px; display: block; margin: 0 auto;" />
            <h2 style="text-align: center;">{{ post.title }}</h2>
            <p style="text-align: center;">Date: {{ post.date | date: "%Y-%m-%d" }}</p>
        </a>
    </div>
    {% endfor %}
</div>


