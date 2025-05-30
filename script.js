// 合作院校标签切换
document.addEventListener('DOMContentLoaded', function() {
    // 院校标签切换
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有active类
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 添加active类到当前按钮和对应内容
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 成功案例筛选
    const filterButtons = document.querySelectorAll('.filter-button');
    const caseStudies = document.querySelectorAll('.case-study');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 更新按钮状态
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // 筛选案例
            caseStudies.forEach(caseStudy => {
                if (filterValue === 'all' || caseStudy.getAttribute('data-category') === filterValue) {
                    caseStudy.style.display = 'grid';
                } else {
                    caseStudy.style.display = 'none';
                }
            });
        });
    });
    
    // 表单提交
    const contactForm = document.getElementById('consultation-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 这里可以添加表单验证
            
            // 模拟表单提交
            alert('感谢您的咨询！我们的顾问会尽快与您联系。');
            this.reset();
        });
    }
});


// 日本留学和菁英计划页面的标签切换
document.querySelectorAll('.program-tabs .tab-button, .service-tabs .tab-button').forEach(button => {
    button.addEventListener('click', function() {
        const tabContainer = this.closest('.program-tabs, .service-tabs');
        const tabContents = tabContainer.nextElementSibling.querySelectorAll('.tab-content');
        
        // 移除同组中所有按钮的active类
        tabContainer.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // 添加active类到当前按钮
        this.classList.add('active');
        
        // 隐藏所有内容
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // 显示对应内容
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});