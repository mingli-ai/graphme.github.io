document.addEventListener("DOMContentLoaded", function() {
  // 延迟等待 DOM 渲染头像
  setTimeout(function() {
    // 找到所有作者头像的 <a> 标签
    const authors = document.querySelectorAll("#section-people .author-avatar a");
    
    authors.forEach(function(link) {
      const img = link.querySelector("img");
      if (img && img.alt === "Ming Li") { // 只针对 Ming Li
        link.style.cursor = "pointer";
        link.addEventListener("click", function(event) {
          event.preventDefault(); // 阻止默认跳转
          window.open("https://mingli-ai.github.io/", "_blank"); // 新窗口打开
        });
      }
    });
  }, 500); // 延迟0.5秒，确保DOM渲染完成
});
