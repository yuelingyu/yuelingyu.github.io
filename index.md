---
layout: none
lang: en
permalink: /
---
{% if page.lang == "zh" or site.active_lang == "zh" %}
  <meta http-equiv="refresh" content="0; url={{ site.baseurl }}/zh/about/" />
{% else %}
  <meta http-equiv="refresh" content="0; url={{ site.baseurl }}/en/about/" />
{% endif %}
