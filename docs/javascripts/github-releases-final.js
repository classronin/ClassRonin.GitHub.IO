// 初始化函数
function initGitHubReleases() {
    console.log('GitHub Releases: 初始化开始');

    // 查找所有包含 @github-releases[用户名/仓库名] 的文本节点
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );

    let foundCount = 0;
    let node;

    while (node = walker.nextNode()) {
        const text = node.textContent;
        const regex = /@github-releases\[([^\]]+)\]/g;

        if (regex.test(text)) {
            regex.lastIndex = 0; // 重置正则表达式索引

            const newHTML = text.replace(regex, function(match, repo) {
                foundCount++;
                console.log('GitHub Releases: 找到匹配的文本:', match, '仓库:', repo);
                return `<div class="github-releases" data-repo="${repo}"></div>`;
            });

            if (text !== newHTML) {
                // 创建临时元素来解析HTML
                const temp = document.createElement('div');
                temp.innerHTML = newHTML;

                // 替换原始文本节点
                while (temp.firstChild) {
                    node.parentNode.insertBefore(temp.firstChild, node);
                }
                node.parentNode.removeChild(node);

                // 处理新创建的 github-releases 元素
                const containers = document.querySelectorAll('.github-releases:not(.processed)');
                containers.forEach(container => {
                    if (!container.processed) {
                        console.log('GitHub Releases: 处理github-releases元素，仓库:', container.dataset.repo);
                        container.processed = true;
                        container.classList.add('processed');
                        processGitHubRelease(container);
                    }
                });
            }
        }
    }

    console.log('GitHub Releases: 初始化完成，共处理', foundCount, '个匹配');
}

// 处理单个 GitHub releases 元素
function processGitHubRelease(container) {
    const repo = container.dataset.repo;
    if (!repo) {
        console.log('GitHub Releases: 容器没有data-repo属性');
        return;
    }

    console.log('GitHub Releases: 开始处理仓库:', repo);

    // 显示加载中提示
    container.innerHTML = '<div class="loading-releases">加载中...</div>';

    // 获取 GitHub API URL
    const apiUrl = `https://api.github.com/repos/${repo}/releases/latest`;

    // 使用 fetch API 获取数据
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`GitHub API 请求失败: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // 检查是否是 pre-release
            if (data.prerelease) {
                container.innerHTML = '<div class="no-releases">没有找到正式发布版本</div>';
                return;
            }

            // 获取发布信息
            const name = data.name || data.tag_name || '';
            const publishedAt = data.published_at ? new Date(data.published_at).toLocaleDateString('zh-CN') : '';

            // 构建HTML
            let html = `<div class="github-releases-info">${name} 发布日期: ${publishedAt}</div>`;

            // 添加下载链接
            const assets = data.assets || [];
            if (assets.length > 0) {
                html += '<div class="github-releases-downloads">';

                // 创建平台分类
                const platforms = {
                    'x64 Windows': [],
                    '其他平台': []
                };

                // 白名单文件扩展名
                const allowedExtensions = ['.exe', '.zip', '.tar.gz', '.msi'];

                // 分类文件
                assets.forEach(asset => {
                    if (asset.name && !asset.name.includes('Source code')) {
                        const fileName = asset.name.toLowerCase();

                        // 检查文件扩展名是否在白名单中
                        const hasAllowedExtension = allowedExtensions.some(ext => fileName.endsWith(ext));

                        if (hasAllowedExtension) {
                            // 检查是否是 Windows 64 位
                            if (fileName.includes('win-amd64') || 
                                fileName.includes('win-x64') || 
                                fileName.includes('x86_64-pc-windows') || 
                                fileName.includes('win64') || 
                                fileName.includes('amd64') ||
                                fileName.includes('windows-x64')) {
                                platforms['x64 Windows'].push(asset);
                            } else {
                                // 所有其他平台都归为"其他平台"
                                platforms['其他平台'].push(asset);
                            }
                        }
                    }
                });

                // 为每个平台创建下载链接
                for (const [platform, platformAssets] of Object.entries(platforms)) {
                    if (platformAssets.length > 0) {
                        html += `<div class="platform-group"><div class="platform-name">${platform}</div>`;

                        platformAssets.forEach(asset => {
                            const size = formatFileSize(asset.size);
                            html += `<div class="github-release-download"><a href="${asset.browser_download_url}" target="_blank">${asset.name}</a> (${size})</div>`;
                        });

                        html += '</div>';
                    }
                }

                html += '</div>';
            }

            container.innerHTML = html;
        })
        .catch(error => {
            console.error('GitHub Releases: 获取数据失败', error);
            container.innerHTML = `<div class="github-releases-error">无法加载发布信息</div>`;
        });
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// 页面加载完成后初始化
document.addEventListener("DOMContentLoaded", function() {
    // 立即初始化一次
    initGitHubReleases();

    // 延迟再次初始化，确保所有内容都已加载
    setTimeout(initGitHubReleases, 1000);

    // 监听 MkDocs 即时导航事件
    const observer = new MutationObserver(function(mutations) {
        // 当页面内容变化时重新初始化
        setTimeout(initGitHubReleases, 500);
    });

    // 观察页面内容变化
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // 监听选项卡切换事件
    document.addEventListener('click', function(e) {
        // 检查点击的是否是选项卡标签
        if (e.target.matches('.md-tabs__link') || e.target.closest('.md-tabs__link')) {
            // 延迟执行，确保选项卡内容已经加载
            setTimeout(initGitHubReleases, 200);
        }

        // 检查点击的是否是折叠块标题
        if (e.target.matches('.admonition-title') || e.target.closest('.admonition-title')) {
            // 延迟执行，确保折叠块内容已经展开
            setTimeout(initGitHubReleases, 200);
        }
    });

    // 定期检查是否有未处理的 GitHub releases 标记
    setInterval(function() {
        if (document.body.innerHTML.match(/@github-releases\[([^\]]+)\]/g)) {
            console.log('GitHub Releases: 发现未处理的标记，重新初始化');
            initGitHubReleases();
        }
    }, 3000);
});
