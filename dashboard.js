document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Quitar 'active' de todos los links
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // Ocultar todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Mostrar la sección seleccionada
        const target = this.getAttribute('data-section');
        const activeSection = document.getElementById('content-' + target);
        if (activeSection) {
            activeSection.style.display = 'block';
            document.getElementById('section-title').innerText = target.charAt(0).toUpperCase() + target.slice(1);
        }
    });
});