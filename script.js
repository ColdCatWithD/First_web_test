// 合作院校标签切换
document.addEventListener('DOMContentLoaded', function() {
    
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

