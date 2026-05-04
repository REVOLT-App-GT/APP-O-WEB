document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // 1. Quitar la clase 'active' de todos los enlaces
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        
        // 2. Añadir la clase 'active' al enlace presionado
        // Usamos 'this' porque esta es una función tradicional
        this.classList.add('active');

        // 3. Ocultar todas las secciones de contenido
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // 4. Obtener el nombre de la sección desde el atributo data-section
        const target = this.getAttribute('data-section');
        
        // 5. Mostrar la sección seleccionada
        const activeSection = document.getElementById('content-' + target);
        
        if (activeSection) {
            activeSection.style.display = 'block';
            
            // 6. Actualizar el título de la cabecera (opcional)
            const sectionTitle = document.getElementById('section-title');
            if (sectionTitle) {
                // Ponemos la primera letra en mayúscula para que se vea profesional
                sectionTitle.innerText = target.charAt(0).toUpperCase() + target.slice(1);
            }
        }
    });
});