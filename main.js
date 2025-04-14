document.addEventListener('DOMContentLoaded', function() {
    const mountainsBack = document.querySelector('.mountains-back');
    const mountainsFront = document.querySelector('.mountains-front');
    const artText = document.querySelector('.art-text');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const speedBack = 0.12;    // 后山滚动速度加快
        const speedFront = 0.2;    // 前山滚动速度中等
        const speedText = 0.15;     // 艺术字滚动速度比前景山慢一点

        mountainsBack.style.transform = `translateY(${-scrolled * speedBack}px)`;
        mountainsFront.style.transform = `translateY(${scrolled * speedFront}px)`;
        
        // 计算艺术字的垂直位置，使其在滚动到第二页时完全消失
        const viewportHeight = window.innerHeight;
        const textOffset = Math.min(scrolled * speedText, viewportHeight * 1.2); // 增加最大位移，确保完全消失
        
        // 平滑地回到初始位置
        const initialOffset = -1; // 初始位置
        const currentOffset = -10 + textOffset; // 当前滚动位置
        const smoothOffset = Math.max(initialOffset, currentOffset); // 取较大值，确保平滑过渡
        
        artText.style.transform = `translateY(${smoothOffset}%) translateX(10%)`;
    });

    // 初始化粒子效果
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#D4AF37'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.6,
                random: true
            },
            size: {
                value: 2,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#D4AF37',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            }
        },
        retina_detect: true
    });
});

// 主题切换功能
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    
    // 检查本地存储中的主题设置
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // 切换主题
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    // 更新主题图标
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'dark' ? '��' : '☀️';
    }
}); 