---
layout: none
lang: en
permalink: /
---
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    // 智能语言检测和重定向
    function redirectToLanguage() {
      var userLang = navigator.language || navigator.userLanguage || 'en';
      var isZh = userLang.toLowerCase().indexOf('zh') === 0;
      
      // 检查是否有存储的语言偏好
      var savedLang = localStorage.getItem('preferred-language');
      if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        isZh = (savedLang === 'zh');
      }
      
      var redirectUrl = isZh ? '{{ site.baseurl }}/zh/about/' : '{{ site.baseurl }}/about/';
      
      // 存储语言偏好
      localStorage.setItem('preferred-language', isZh ? 'zh' : 'en');
      
      window.location.href = redirectUrl;
    }
    
    // 立即执行重定向
    redirectToLanguage();
  </script>
  <!-- 作为后备方案的meta重定向 -->
  <meta http-equiv="refresh" content="1; url={{ site.baseurl }}/about/" />
</head>
<body>
  <p>Redirecting...</p>
</body>
</html>
