// Función para mostrar el mensaje y reproducir la canción
function revealLove() {
    const loveMessage = document.getElementById('loveMessage');
    const loveSong = document.getElementById('loveSong');

    loveMessage.classList.remove('hidden');
    loveMessage.style.opacity = 1; // Muestra el mensaje de amor

    // Reproduce la canción
    loveSong.currentTime = 0; // Reinicia la canción
    loveSong.play();
}

// Función para mostrar corazones y rosas aleatorios indefinidamente
function showLoveMessage() {
    const heartsArea = document.getElementById('heartsArea');

    // Genera corazones y rosas
    setInterval(() => {
        createFloatingElement('❤️', 'heart-float', heartsArea);
        createFloatingElement('🌹', 'heart-float', heartsArea);
        createFloatingImage('gojo.jpg', 'heart-float', heartsArea);
         
    }, 500); // Intervalo para generar nuevos elementos
}

// Función para crear un elemento flotante
function createFloatingElement(char, floatClass, container) {
    const element = document.createElement('div');
    element.innerHTML = char;
    element.classList.add(floatClass);

    // Posición aleatoria en la pantalla
    element.style.left = Math.random() * 100 + 'vw';
    element.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Duración aleatoria
    container.appendChild(element);

    // Elimina el elemento después de que flote fuera de la vista
    setTimeout(() => {
        element.remove();
    }, 5000); // Tiempo antes de eliminar el elemento
}

// Función para crear la imagen flotante de Gojo
function createFloatingImage(imageSrc, floatClass, container) {
    const img = document.createElement('img');
    img.src = imageSrc;
    img.classList.add('heart-image', floatClass); // Añadimos la clase de flotación aquí

    // Posición aleatoria en la pantalla
    img.style.left = Math.random() * 100 + 'vw';
    img.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Duración aleatoria
    container.appendChild(img);

    // Elimina la imagen después de que flote fuera de la vista
    setTimeout(() => {
        img.remove();
    }, 5000); // Tiempo antes de eliminar la imagen
}
