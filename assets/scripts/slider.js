let currentSlideIndex = 1;
const slideIntervalTime = 5000; // Cambia de slide cada 5 segundos
let slideTimer; // Variable para el temporizador

// Inicializar el slider
// Mostrar el primer slide después de un pequeño retraso (ej. 500ms)
function initSlider() {
    setTimeout(() => {
        showSlide(currentSlideIndex);
        startAutoSlide(); // Iniciar el temporizador automático
    }, 500); // Agrega un pequeño retraso para la primera diapositiva
}

// Función para cambiar al slide actual
function setCurrentSlide(n) {
    currentSlideIndex = n;
    resetSlideTimer(); // Reiniciar el temporizador manualmente
    showSlide(currentSlideIndex);
}

// Función para avanzar al siguiente slide
function nextSlide() {
    currentSlideIndex++;
    if (currentSlideIndex > document.querySelectorAll(".hero-slide").length) {
        currentSlideIndex = 1;
    }
    showSlide(currentSlideIndex);
}

// Función para retroceder al slide anterior
function prevSlide() {
    currentSlideIndex--;
    if (currentSlideIndex < 1) {
        currentSlideIndex = document.querySelectorAll(".hero-slide").length;
    }
    showSlide(currentSlideIndex);
}

// Mostrar el slide basado en el índice
function showSlide(n) {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".dot");

    // Remover clases de todas las diapositivas
    slides.forEach((slide) => {
        slide.classList.remove("active", "prev");
    });
    dots.forEach((dot) => dot.classList.remove("active"));

    // Establecer el slide actual
    const currentSlide = slides[n - 1];
    currentSlide.classList.add("active");

    // Establecer el slide anterior (para mover hacia la izquierda)
    if (n > 1) {
        const prevSlide = slides[n - 2];
        prevSlide.classList.add("prev");
    } else {
        const prevSlide = slides[slides.length - 1];
        prevSlide.classList.add("prev");
    }

    // Actualizar el dot activo
    dots[n - 1].classList.add("active");
}

// Iniciar el temporizador automático del slider
function startAutoSlide() {
    slideTimer = setInterval(nextSlide, slideIntervalTime);
}

// Reiniciar el temporizador cuando el usuario cambia manualmente
function resetSlideTimer() {
    clearInterval(slideTimer); // Detener el temporizador actual
    startAutoSlide(); // Reiniciar el temporizador desde la diapositiva actual
}

// Iniciar el slider al cargar
initSlider();
