(function () {
    let currentSlide = 0;
    let currentCategory = 'eventos';

    function showCategory(category) {
        currentCategory = category;
        document.querySelectorAll('.category-info').forEach(cat => {
            cat.classList.remove('active-info');
        });
        document.querySelector(`#${category}`).classList.add('active-info');
        document.querySelectorAll('.grid-item-info').forEach(item => {
            item.classList.remove('active-category');
        });
        document.querySelector(`.grid-item-info[onclick="showCategory('${category}')"]`).classList.add('active-category');
        updateCategoryTitle();
        currentSlide = 0;
        updateSlides(category);
    }

    function updateCategoryTitle() {
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
            currentSlide++;
            if (currentSlide >= slides.length) {
                currentSlide = slides.length - 1;
            }
            updateSlides(currentCategory);
            updateCategoryTitle();
        }
    }

    function prevSlide() {
        const slides = document.querySelectorAll(`#${currentCategory} .slide-info`);
        if (slides.length > 0) {
            currentSlide--;
            if (currentSlide < 0) {
                currentSlide = 0;
            }
            updateSlides(currentCategory);
            updateCategoryTitle();
        }
    }

    // Expose functions globally
    window.showCategory = showCategory;
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;

    document.addEventListener('DOMContentLoaded', () => {
        showCategory('eventos');
    });
})();
