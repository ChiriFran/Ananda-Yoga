let currentSlide = 0;
let currentCategory = 'certificados'; // Guardar la categoría actual

function showCategory(category) {
    // Actualizar la categoría activa
    currentCategory = category;

    // Ocultar todas las categorías y mostrar la seleccionada
    document.querySelectorAll('.category-info').forEach(cat => {
        cat.classList.remove('active-info');
    });
    document.querySelector(`#${category}`).classList.add('active-info');

    // Actualizar el título de la categoría
    updateCategoryTitle();

    // Reiniciar el slide y actualizar las imágenes
    currentSlide = 0;
    updateSlides(category);
}

function updateCategoryTitle() {
    // Obtener el nombre correcto para mostrar
    const titles = {
        certificados: 'Certificados',
        clases: 'Clases',
        eventos: 'Eventos'
    };
    const categoryTitle = titles[currentCategory] || 'Categoría';
    document.getElementById('category-title-info').textContent = categoryTitle;
}

function updateSlides(category) {
    const slides = document.querySelectorAll(`#${category} .slide-info`);
    slides.forEach((slide, index) => {
        slide.classList.remove('active-info');
        if (index === currentSlide) {
            slide.classList.add('active-info');
        }
    });
}

function nextSlide() {
    const slides = document.querySelectorAll(`#${currentCategory} .slide-info`);
    if (slides.length > 0) {
        // Avanzar al siguiente slide, si no es el último
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = slides.length - 1; // Limitar al último slide
        }
        updateSlides(currentCategory);
        updateCategoryTitle();
    }
}

function prevSlide() {
    const slides = document.querySelectorAll(`#${currentCategory} .slide-info`);
    if (slides.length > 0) {
        // Retroceder al slide anterior, si no es el primero
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = 0; // Limitar al primer slide
        }
        updateSlides(currentCategory);
        updateCategoryTitle();
    }
}

// Esperar a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar la primera categoría al cargar la página
    showCategory('clases');
});
