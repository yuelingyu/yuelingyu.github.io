// Language switcher enhancement
document.addEventListener('DOMContentLoaded', function() {
    // 语言切换按钮增强 - 更精确的选择器
    var languageSwitcher = document.querySelector('.toggle-container a.nav-link');
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', function(e) {
            // 存储用户的语言偏好
            var href = this.getAttribute('href');
            if (href.includes('/zh/')) {
                localStorage.setItem('preferred-language', 'zh');
            } else if (href.includes('/en/')) {
                localStorage.setItem('preferred-language', 'en');
            }
        });
    }

    // 检查当前页面语言并更新body class
    var currentPath = window.location.pathname;
    if (currentPath.includes('/zh/')) {
        document.body.classList.add('lang-zh');
        document.body.setAttribute('data-lang', 'zh');
    } else if (currentPath.includes('/en/')) {
        document.body.classList.add('lang-en');
        document.body.setAttribute('data-lang', 'en');
    }
});

// 处理语言相关的页面导航
function navigateToLanguagePage(targetLang, currentPage) {
    var currentPath = window.location.pathname;
    var newPath;
    
    if (currentPath.includes('/zh/')) {
        newPath = currentPath.replace('/zh/', '/' + targetLang + '/');
    } else if (currentPath.includes('/en/')) {
        newPath = currentPath.replace('/en/', '/' + targetLang + '/');
    } else {
        // 默认页面
        newPath = '/' + targetLang + '/about/';
    }
    
    // 存储语言偏好
    localStorage.setItem('preferred-language', targetLang);
    
    // 导航到新页面
    window.location.href = newPath;
}
