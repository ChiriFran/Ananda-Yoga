class Slider {
    constructor(slideSelector, dotSelector, intervalTime = 5000) {
        this.slides = document.querySelectorAll(slideSelector);
        this.dots = document.querySelectorAll(dotSelector);
        this.currentSlideIndex = 1;
        this.intervalTime = intervalTime;
        this.slideTimer = null;
    }

    init() {
        // Mostrar el primer slide después de un pequeño retraso
        setTimeout(() => {
            this.showSlide(this.currentSlideIndex);
            this.startAutoSlide(); // Iniciar el temporizador automático
        }, 200);
    }

    currentSlide(n) {
        this.currentSlideIndex = n;
        this.resetSlideTimer(); // Reiniciar el temporizador manualmente
        this.showSlide(this.currentSlideIndex);
    }

    nextSlide() {
        this.currentSlideIndex++;
        if (this.currentSlideIndex > this.slides.length) {
            this.currentSlideIndex = 1;
        }
        this.showSlide(this.currentSlideIndex);
    }

    prevSlide() {
        this.currentSlideIndex--;
        if (this.currentSlideIndex < 1) {
            this.currentSlideIndex = this.slides.length;
        }
        this.showSlide(this.currentSlideIndex);
    }

    showSlide(n) {
        // Remover clases de todas las diapositivas
        this.slides.forEach((slide) => slide.classList.remove("active", "prev"));
        this.dots.forEach((dot) => dot.classList.remove("active"));

        // Establecer el slide actual
        const currentSlide = this.slides[n - 1];
        currentSlide.classList.add("active");

        // Establecer el slide anterior (para animación hacia la izquierda)
        if (n > 1) {
            const prevSlide = this.slides[n - 2];
            prevSlide.classList.add("prev");
        } else {
            const prevSlide = this.slides[this.slides.length - 1];
            prevSlide.classList.add("prev");
        }

        // Actualizar el dot activo
        this.dots[n - 1].classList.add("active");
    }

    startAutoSlide() {
        this.slideTimer = setInterval(() => this.nextSlide(), this.intervalTime);
    }

    resetSlideTimer() {
        clearInterval(this.slideTimer); // Detener el temporizador actual
        this.startAutoSlide(); // Reiniciar el temporizador desde la diapositiva actual
    }
}
let slider; // Hacer que la variable slider sea global

document.addEventListener('DOMContentLoaded', () => {
    slider = new Slider(".hero-slide", ".dot");
    slider.init();
});

