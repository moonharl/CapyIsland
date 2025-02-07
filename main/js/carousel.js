let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % totalSlides;
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    showSlide(index);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Alterna automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);
