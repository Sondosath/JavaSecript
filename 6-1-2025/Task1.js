// الحصول على الزر باستخدام الـ ID
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// إضافة مستمع للحدث "التمرير" (scroll)
window.addEventListener("scroll", () => {
    // إذا تجاوز التمرير 300 بيكسل، أظهر الزر
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "flex"; // أظهر الزر
    } else {
        scrollToTopBtn.style.display = "none"; // أخفِ الزر
    }
});

// إضافة حدث النقر على الزر
scrollToTopBtn.addEventListener("click", () => {
    // التمرير لأعلى الصفحة بسلاسة
    window.scrollTo({
        top: 0, // أعلى الصفحة
        behavior: "smooth" // تمرير سلس
    });
});
