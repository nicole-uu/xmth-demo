// 监听滚动事件
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        // 当元素进入视口的 80% 位置时触发动画
        if (elementTop < windowHeight * 0.8) {
            element.classList.add('active');
        }
    });
}

// 添加滚动监听
window.addEventListener('scroll', handleScrollAnimation);
// 页面加载时也要检查一次
window.addEventListener('load', handleScrollAnimation); 