---
layout: page
title: 博客
permalink: /zh/blog/
lang: zh
description: 我的思考和观察。
nav: true
nav_order: 3
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 5
  sort_field: 'date'
  sort_reverse: true
  trail: 
    before: 1 # 当前页面前的页面数
    after: 3  # 当前页面后的页面数
---

<div class="post">

  {{ content }}

  {%- if site.posts.size > 0 -%}
    {%- if page.pagination.enabled -%}
      {% assign postlist = paginator.posts %}
    {%- else -%}
      {% assign postlist = site.posts %}
    {%- endif -%}

    {%- for post in postlist -%}

      {%- if forloop.index == 1 -%}
        {%- assign postlist_index0 = 0 -%}
      {%- else -%}
        {%- assign postlist_index0 = postlist_index0 | plus: 1 -%}
      {%- endif -%}
      {%- assign even_odd = postlist_index0 | modulo: 2 -%}

      {% if even_odd == 0 %}
        <div class="row">
      {% endif %}

        <div class="col-sm-{% if page.pagination.enabled %}12{% else %}6{% endif %} p-0">
          <div class="card hoverable">
            {%- if post.img or post.image -%}
              {%- assign img_path = post.img | default: post.image -%}
              {%- assign img_class = "card-img-top" -%}
              {%- capture sizes -%}(min-width: 35em) 350px, 100vw{%- endcapture -%}
              {%- include figure.liquid 
                  path=img_path 
                  class=img_class 
                  sizes=sizes 
                  alt=img_path -%}
            {%- endif -%}
            <div class="card-body">
              <a href="{{ post.url | relative_url }}">
                <h5 class="card-title">{{ post.title }}</h5>
              </a>
              <p class="card-text">{{ post.description }}</p>
              <div class="row ml-1 mr-1 p-0">
                <div class="col-sm-9 p-0">
                  {%- assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 -%}
                  <h6 class="card-subtitle mb-2 grey-text">
                    {{ post.date | date: "%B %-d, %Y" }}
                    {%- if post.external_source == blank -%}
                      &nbsp;·&nbsp;
                      {% if read_time == 1 %}
                        {{ read_time }} 分钟阅读
                      {% else %}
                        {{ read_time }} 分钟阅读
                      {% endif %}
                    {%- endif -%}
                  </h6>
                </div>
                <div class="col-sm-3 p-0">
                  {% include social.liquid %}
                </div>
              </div>
            </div>
          </div>
        </div>

      {% if even_odd == 1 %}
        </div>
      {% endif %}

    {%- endfor -%}

    {%- if page.pagination.enabled -%}
      {% include pagination.liquid %}
    {%- endif -%}

  {%- else -%}
    <p>暂无文章。</p>
  {%- endif -%}

</div>
