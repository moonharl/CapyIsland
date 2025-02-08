let index = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

function showSlide(i) {
    // Remove a classe 'active' de todos os slides
    slides.forEach(slide => slide.classList.remove("active"));

    // Adiciona a classe 'active' apenas ao slide correto
    slides[i].classList.add("active");
}

function nextSlide() {
    index = (index + 1) % totalSlides; // Avança no índice
    showSlide(index);
}

function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides; // Retrocede no índice
    showSlide(index);
}

// Adiciona eventos para as setas
document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

// Alterna automaticamente a cada 5 segundos
setInterval(nextSlide, 8000);
