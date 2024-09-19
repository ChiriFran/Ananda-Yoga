document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPause');
    const seekBar = document.getElementById('seekBar');
    const currentTimeDisplay = document.getElementById('currentTime');
    const durationDisplay = document.getElementById('duration');

    // Intentar obtener la duración repetidamente en caso de que no esté disponible inmediatamente
    function setDuration() {
        const duration = audio.duration;
        if (!isNaN(duration) && duration > 0) { // Asegurarse de que la duración sea válida
            seekBar.max = Math.floor(duration);
            durationDisplay.textContent = formatTime(duration); // Establecer la duración
        } else {
            // Si la duración no está lista, intentamos obtenerla después de un pequeño delay
            setTimeout(setDuration, 500); // Reintenta en 500ms
        }
    }

    // Llamar a setDuration cuando el audio esté cargado
    audio.addEventListener('loadedmetadata', () => {
        setDuration();
    });

    // Actualizar el tiempo actual y la barra de progreso mientras el audio se reproduce
    audio.addEventListener('timeupdate', () => {
        seekBar.value = Math.floor(audio.currentTime);
        currentTimeDisplay.textContent = formatTime(audio.currentTime);
    });

    // Permitir la navegación en el audio usando la barra de progreso
    seekBar.addEventListener('input', () => {
        audio.currentTime = seekBar.value;
    });

    // Control del botón de play/pause
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.classList.remove('play');
            playPauseButton.classList.add('pause');
        } else {
            audio.pause();
            playPauseButton.classList.remove('pause');
            playPauseButton.classList.add('play');
        }
    });

    // Formato de tiempo (minutos:segundos)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${minutes}:${secs}`;
    }

    // Intentar obtener la duración al cargar la página
    setDuration(); // Esto intentará obtener la duración inmediatamente
});
