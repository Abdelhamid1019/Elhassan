/**
 * تفعيل زر القائمة في نسخة الموبايل
 * كتبنا الكود بدون أي مكتبات خارجية لضمان أقصى سرعة للموقع
 */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            // التحقق من حالة القائمة (مفتوحة أم مغلقة) لدعم إتاحة الوصول (Accessibility)
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            // تغيير الحالة
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            // إظهار أو إخفاء القائمة بتنسيق يتناسب مع الموبايل
            if (!isExpanded) {
                mainNav.style.display = 'block';
                mainNav.style.marginTop = '15px';
                mainNav.style.paddingTop = '15px';
                mainNav.style.borderTop = '1px solid #e5e7eb';
            } else {
                mainNav.style.display = 'none';
            }
        });
    }
});
