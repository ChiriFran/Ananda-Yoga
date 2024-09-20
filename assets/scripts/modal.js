// Obtener elementos del DOM
const openModalButton = document.querySelector('.btn-open-modal');
const closeModalButton = document.querySelector('.btn-close-modal');
const modal = document.getElementById('myModal');

// Función para abrir el modal
const openModal = () => {
    modal.showModal();
    document.body.classList.add('modal-open'); // Desactiva el scroll
};

// Abrir el modal al hacer clic en el botón
openModalButton.addEventListener('click', openModal);

// Cerrar el modal al hacer clic en el botón "Cerrar"
closeModalButton.addEventListener('click', () => {
    modal.setAttribute('closing', ''); // Agregar atributo para la animación de salida
    setTimeout(() => {
        modal.close();
        modal.removeAttribute('closing'); // Remover atributo después de cerrar
        document.body.classList.remove('modal-open'); // Reactiva el scroll
    }, 300); // Esperar a que la animación termine
});

// Cerrar el modal al hacer clic fuera del contenido del modal
modal.addEventListener('click', (event) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
        event.clientX < dialogDimensions.left ||
        event.clientX > dialogDimensions.right ||
        event.clientY < dialogDimensions.top ||
        event.clientY > dialogDimensions.bottom
    ) {
        modal.setAttribute('closing', ''); // Agregar atributo para la animación de salida
        setTimeout(() => {
            modal.close();
            modal.removeAttribute('closing'); // Remover atributo después de cerrar
            document.body.classList.remove('modal-open');
        }, 300); // Esperar a que la animación termine
    }
});

// Abrir el modal automáticamente 7 segundos después de que la página se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        openModal();
    }, 7000); // 7 segundos de delay
});
