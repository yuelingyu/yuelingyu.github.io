---
layout: page
title: 项目
permalink: /zh/projects/
lang: zh
description: 按类别分类的项目样本。
nav: true
nav_order: 2
display_categories: [work, fun]
horizontal: false
---

<!-- pages/projects.zh.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- 显示分类的项目 -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- 生成项目卡片 -->
  {%- if page.horizontal -%}
    <div class="container">
      <div class="row row-cols-2">
      {%- for project in sorted_projects -%}
        {% include projects_horizontal.liquid %}
      {%- endfor %}
      </div>
    </div>
  {%- else -%}
    <div class="grid">
      {%- for project in sorted_projects -%}
        {% include projects.liquid %}
      {%- endfor %}
    </div>
  {%- endif -%}
  {%- endfor %}

{%- else -%}
<!-- 显示所有项目无分类 -->
{%- assign sorted_projects = site.projects | sort: "importance" %}
  <!-- 生成项目卡片 -->
  {%- if page.horizontal -%}
    <div class="container">
      <div class="row row-cols-2">
      {%- for project in sorted_projects -%}
        {% include projects_horizontal.liquid %}
      {%- endfor %}
      </div>
    </div>
  {%- else -%}
    <div class="grid">
      {%- for project in sorted_projects -%}
        {% include projects.liquid %}
      {%- endfor %}
    </div>
  {%- endif -%}
{%- endif -%}
</div>
