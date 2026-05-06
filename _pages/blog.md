---
layout: default
permalink: /blog/
title: blog
nav: false
nav_order: 5
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

<div class="post">
  <header class="post-header">
    <h1 class="post-title">{{ site.blog_name }}</h1>
    <p class="desc">{{ site.blog_description }}</p>
  </header>

  <article>
    {% if paginator.posts.size > 0 %}
      <ul class="post-list">
        {% for post in paginator.posts %}
        <li>
          <h3>
            <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="post-meta">{{ post.date | date: '%B %-d, %Y' }}</p>
          {% if post.description %}
            <p>{{ post.description }}</p>
          {% endif %}
        </li>
        {% endfor %}
      </ul>
    {% else %}
      <p><em>No posts yet — this is a placeholder. Drop a Markdown file in <code>_posts/</code> to publish.</em></p>
    {% endif %}
  </article>
</div>
