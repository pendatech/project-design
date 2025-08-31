document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // close all
            faqItems.forEach(i => i.classList.remove("active"));

            // toggle current
            if (!isActive) {
              item.classList.add("active");
            }
        });
    });
});