document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.revoltVideo');
    const likeBtns = document.querySelectorAll('.like-btn');

    // Reproducir/Pausar al hacer clic en cualquier video
    videos.forEach(video => {
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Autoreproducir el primer video al cargar
        videos[0].play();
    });

    // Lógica para que los botones de Like funcionen en cada video
    likeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.style.color = "#ff4757";
            btn.innerHTML = "❤️ " + (parseFloat(btn.innerText.split(' ')[1]) + 0.1).toFixed(1) + "k";
        });
    });

    // Lógica de conexión que ya tenías
    window.addEventListener('offline', () => {
        document.getElementById('connection-status').style.display = 'block';
    });

const btnPerfil = document.querySelector('a:nth-child(6)'); // Selecciona el enlace de Perfil
const feedPrincipal = document.querySelector('.feed');
const statsHeader = document.querySelector('.stats-header');
const profileSection = document.getElementById('profile-section');
const btnInicio = document.querySelector('.menu a:first-child');

btnPerfil.addEventListener('click', (e) => {
    e.preventDefault();
    feedPrincipal.style.display = 'none';
    statsHeader.style.display = 'none';
    profileSection.style.display = 'block';
    
    // Cambiar estado activo en el menú
    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    btnPerfil.classList.add('active');
});

btnInicio.addEventListener('click', (e) => {
    e.preventDefault();
    feedPrincipal.style.display = 'flex';
    statsHeader.style.display = 'grid';
    profileSection.style.display = 'none';
    
    document.querySelectorAll('.menu a').forEach(a => a.classList.remove('active'));
    btnInicio.classList.add('active');
});
});
