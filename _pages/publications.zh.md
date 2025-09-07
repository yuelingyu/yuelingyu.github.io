---
layout: page
permalink: /zh/publications/
title: 发表
lang: zh
description: 我的发表文章按年份分类。
years: [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015]
nav: true
nav_order: 1
---
<!-- _pages/publications.zh.md -->

<!-- 论文搜索功能 -->
{% include bib_search.liquid %}

<div class="publications">

{% bibliography -f papers_zh.bib %}

</div>
