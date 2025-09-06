document.addEventListener("DOMContentLoaded", function() {
    // 创建评论容器
    const commentsContainer = document.createElement("div");
    commentsContainer.id = "giscus-container";

    // 找到文章内容区域
    const content = document.querySelector(".md-content");
    if (content) {
        // 在文章内容后添加评论容器
        content.appendChild(commentsContainer);

        // 创建 Giscus 脚本
        const script = document.createElement("script");
        script.src = "https://giscus.app/client.js";
        script.setAttribute("data-repo", "classronin/ClassRonin.GitHub.IO");
        script.setAttribute("data-repo-id", "R_kgDOPlbYbg");
        script.setAttribute("data-category", "General");
        script.setAttribute("data-category-id", "DIC_kwDOPlbYbs4CvAGS");
        script.setAttribute("data-mapping", "pathname");
        script.setAttribute("data-strict", "0");
        script.setAttribute("data-reactions-enabled", "1");
        script.setAttribute("data-emit-metadata", "1");
        script.setAttribute("data-input-position", "top");
        script.setAttribute("data-theme", "preferred_color_scheme");
        script.setAttribute("data-lang", "zh-CN");
        script.setAttribute("data-loading", "lazy");
        script.setAttribute("crossorigin", "anonymous");
        script.setAttribute("async", "");

        // 添加脚本到评论容器
        commentsContainer.appendChild(script);
    }
});