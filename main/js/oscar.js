document.addEventListener("DOMContentLoaded", function () {
    let index = 0;
    const slides = document.querySelectorAll(".slidea");
    const totalSlides = slides.length;

    // ✅ Garante que o primeiro slide seja visível no início
    if (slides.length > 0) {
        slides[0].classList.add("active");
    }

    function showSlide(i) {
        slides.forEach(slidea => slidea.classList.remove("active"));
        slides[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % totalSlides;
        showSlide(index);
        resetTimer();
    }

    function prevSlide() {
        index = (index - 1 + totalSlides) % totalSlides;
        showSlide(index);
        resetTimer();
    }

    document.querySelector(".nexta").addEventListener("click", nextSlide);
    document.querySelector(".preva").addEventListener("click", prevSlide);

    let slideTimer = setInterval(nextSlide, 15000);

    function resetTimer() {
        clearInterval(slideTimer);
        slideTimer = setInterval(nextSlide, 15000);
    }
});
