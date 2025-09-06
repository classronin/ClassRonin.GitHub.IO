document.addEventListener("DOMContentLoaded", function() {
    // 镜像列表
    const mirrors = [
        { name: "GitHub.Com", url: "" },
        { name: "GhFast.Top", url: "https://ghfast.top/" },
        { name: "Gh-Proxy.Com", url: "https://gh-proxy.com/" },
        { name: "Gh-Proxy.Net", url: "https://gh-proxy.net/" },	
        { name: "GhProxy.Net", url: "https://ghproxy.net/" },
        { name: "GhProxy.Cn", url: "https://ghproxy.cn/" },
    ];

    // 监听主题变化
    function setupThemeObserver() {
        // 创建一个观察器来监听主题变化
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.attributeName === 'data-md-color-scheme') {
                    // 主题变化时更新所有镜像列表的样式
                    updateAllMirrorLists();
                }
            });
        });

        // 开始观察html元素的变化
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-md-color-scheme']
        });

        return observer;
    }

    // 更新所有镜像列表的样式
    function updateAllMirrorLists() {
        const mirrorLists = document.querySelectorAll('.mirror-list');
        mirrorLists.forEach(list => {
            updateMirrorListStyle(list);
        });
    }

    // 更新单个镜像列表的样式
    function updateMirrorListStyle(mirrorList) {
        // 强制使用与页面相同的背景色和文字颜色
        const bodyStyles = window.getComputedStyle(document.body);
        mirrorList.style.backgroundColor = bodyStyles.backgroundColor;
        mirrorList.style.color = bodyStyles.color;

        // 更新所有镜像选项的样式
        const mirrorOptions = mirrorList.querySelectorAll('.mirror-option');
        mirrorOptions.forEach(option => {
            option.style.color = bodyStyles.color;
        });
    }

    // 获取当前主题的颜色变量
    function getThemeColors() {
        // 尝试多种方式获取主题颜色
        let bgColor, textColor, borderColor, hoverColor, hoverBgColor;

        // 方法1：从CSS变量获取
        const rootStyles = getComputedStyle(document.documentElement);
        bgColor = rootStyles.getPropertyValue('--md-default-bg-color').trim();
        textColor = rootStyles.getPropertyValue('--md-default-fg-color').trim();
        borderColor = rootStyles.getPropertyValue('--md-default-fg-color--lightest').trim();
        hoverColor = rootStyles.getPropertyValue('--md-accent-fg-color').trim();
        hoverBgColor = rootStyles.getPropertyValue('--md-accent-fg-color--transparent').trim();

        // 方法2：如果CSS变量获取失败，尝试从body元素获取
        if (!bgColor || !textColor) {
            const bodyStyles = getComputedStyle(document.body);
            bgColor = bgColor || bodyStyles.backgroundColor || '#ffffff';
            textColor = textColor || bodyStyles.color || '#000000';
        }

        // 方法3：如果仍然获取失败，使用默认值
        return {
            bgColor: bgColor || '#ffffff',
            textColor: textColor || '#000000',
            borderColor: borderColor || 'rgba(0,0,0,0.1)',
            hoverColor: hoverColor || '#536dfe',
            hoverBgColor: hoverBgColor || 'rgba(83, 109, 254, 0.1)'
        };
    }

    // 设置主题观察器
    const themeObserver = setupThemeObserver();

    // 初始化所有GitHub链接
    function initGithubLinks() {
        // 查找所有 GitHub 下载链接
        const githubLinks = document.querySelectorAll('a[href*="github.com"]');

        githubLinks.forEach(link => {
            // 检查是否已经处理过这个链接
            if (link.dataset.mirrorSelectorInitialized) {
                return;
            }

            // 标记这个链接已经处理过
            link.dataset.mirrorSelectorInitialized = "true";

            // 只处理下载链接，不处理仓库主页
            if (link.href.includes("releases/download") || link.href.includes("archive")) {
                // 保存原始链接
                const originalUrl = link.href;

                // 修改原始链接，使其点击时显示镜像列表而不是直接下载
                link.addEventListener("click", function(e) {
                    e.preventDefault(); // 阻止默认的链接跳转行为
                    e.stopPropagation(); // 阻止事件冒泡

                    // 获取当前主题颜色
                    const colors = getThemeColors();

                    // 检查是否已经创建了镜像列表
                    let mirrorList = document.getElementById("mirror-list-" + btoa(link.href).replace(/[^a-zA-Z0-9]/g, ''));

                    // 如果镜像列表不存在，创建它
                    if (!mirrorList) {
                        mirrorList = document.createElement("div");
                        mirrorList.id = "mirror-list-" + btoa(link.href).replace(/[^a-zA-Z0-9]/g, '');
                        mirrorList.className = "mirror-list md-typeset";

                        // 使用主题颜色设置样式
                        mirrorList.style.position = "absolute";

                        // 强制使用与页面相同的背景色和文字颜色
                        const bodyStyles = window.getComputedStyle(document.body);
                        mirrorList.style.backgroundColor = bodyStyles.backgroundColor;
                        mirrorList.style.color = bodyStyles.color;
                        mirrorList.style.border = `1px solid ${colors.borderColor}`;
                        mirrorList.style.borderRadius = "0"; // 去掉圆角
                        mirrorList.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
                        mirrorList.style.zIndex = "1000";
                        mirrorList.style.padding = "0.5rem"; // 减小内边距
                        mirrorList.style.minWidth = "200px";

                        // 添加镜像选项（去掉标题）
                        mirrors.forEach(mirror => {
                            const mirrorOption = document.createElement("div");
                            mirrorOption.className = "mirror-option";
                            mirrorOption.style.padding = "0.2rem 0.5rem";
                            mirrorOption.style.margin = "0";
                            mirrorOption.style.borderRadius = "0"; // 去掉圆角
                            mirrorOption.style.cursor = "pointer";
                            mirrorOption.style.color = bodyStyles.color; // 使用与页面相同的文字颜色

                            // 鼠标悬停效果
                            mirrorOption.addEventListener("mouseenter", function() {
                                this.style.backgroundColor = colors.hoverBgColor;
                                this.style.color = colors.hoverColor;
                            });
                            mirrorOption.addEventListener("mouseleave", function() {
                                this.style.backgroundColor = "transparent";
                                this.style.color = bodyStyles.color; // 使用与页面相同的文字颜色
                            });

                            // 镜像名称
                            const mirrorName = document.createElement("span");
                            mirrorName.textContent = mirror.name;
                            mirrorOption.appendChild(mirrorName);

                            // 点击事件
                            mirrorOption.addEventListener("click", function(e) {
                                e.stopPropagation(); // 阻止事件冒泡
                                let finalUrl;
                                if (mirror.url) {
                                    // 使用镜像URL
                                    finalUrl = mirror.url + originalUrl;
                                } else {
                                    // 使用原始URL
                                    finalUrl = originalUrl;
                                }

                                // 在新窗口打开链接
                                window.open(finalUrl, '_blank');

                                // 关闭镜像列表
                                mirrorList.remove();
                            });

                            mirrorList.appendChild(mirrorOption);
                        });

                        // 将镜像列表添加到文档中
                        document.body.appendChild(mirrorList);

                        // 定位镜像列表
                        const rect = link.getBoundingClientRect();
                        mirrorList.style.top = (rect.bottom + window.scrollY) + "px";
                        mirrorList.style.left = (rect.left + window.scrollX) + "px";
                    } else {
                        // 如果镜像列表已存在，移除它
                        mirrorList.remove();
                    }
                });

                // 添加视觉提示，表明这是一个特殊链接
                link.style.textDecoration = "underline";
                link.style.cursor = "pointer";

                // 不再添加"[点击选择镜像]"的提示文字
            }
        });
    }

    // 初始化GitHub链接
    initGithubLinks();

    // 监听页面内容变化（例如页面导航）
    const contentObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                // 当页面内容变化时，重新初始化GitHub链接
                setTimeout(initGithubLinks, 100);
            }
        });
    });

    // 开始观察页面内容变化
    contentObserver.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 点击页面其他地方关闭所有镜像列表
    document.addEventListener("click", function(e) {
        if (!e.target.closest('a[href*="github.com"]') && !e.target.closest('.mirror-list')) {
            document.querySelectorAll('.mirror-list').forEach(list => {
                list.remove();
            });
        }
    });
});