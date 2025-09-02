---
layout: page
lang: zh
title: publications
permalink: /publications/
description: 按类别和时间倒序排列的发表文献，由 jekyll-scholar 生成。
nav: true
nav_order: 2
---

<!-- _pages/publications.zh.md -->

<!-- 文献搜索功能 -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --file papers_zh %}

</div>
