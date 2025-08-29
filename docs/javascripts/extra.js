// 等待文档加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 处理普通外部链接
    processExternalLinks();
    
    // 处理按钮样式的外部链接
    processButtonLinks();
});

// 处理普通外部链接
function processExternalLinks() {
    // 选择所有指向外部站点的链接（href以http://或https://开头）
    const externalLinks = document.querySelectorAll('a[href^="http://"], a[href^="https://"]');
    
    // 遍历所有外部链接
    externalLinks.forEach(link => {
        // 检查链接是否指向当前站点（可选）
        const linkHostname = new URL(link.href).hostname;
        const currentHostname = window.location.hostname;
        
        // 如果不是指向当前站点的链接，则添加target="_blank"
        if (linkHostname !== currentHostname && !link.classList.contains('md-button')) {
            link.setAttribute('target', '_blank');
            // 添加rel="noopener noreferrer"增强安全性
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// 处理按钮样式的外部链接
function processButtonLinks() {
    // 选择所有带有md-button类的外部链接
    const buttonLinks = document.querySelectorAll('a.md-button[href^="http://"], a.md-button[href^="https://"]');
    
    // 遍历所有按钮样式的外部链接
    buttonLinks.forEach(link => {
        const linkHostname = new URL(link.href).hostname;
        const currentHostname = window.location.hostname;
        
        // 如果不是指向当前站点的链接，则添加target="_blank"
        if (linkHostname !== currentHostname) {
            link.setAttribute('target', '_blank');
            // 添加rel="noopener noreferrer"增强安全性
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

// 使用MutationObserver监听动态添加的内容
if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                // 给新添加的节点一点时间渲染
                setTimeout(() => {
                    processExternalLinks();
                    processButtonLinks();
                }, 100);
            }
        });
    });
    
    // 开始观察文档变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}