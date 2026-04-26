function openBlock(blockId, element) {
    // 1. Ocultar todas las secciones
    const sections = document.querySelectorAll('.block-section');
    sections.forEach(sec => {
        sec.classList.remove('active-block');
    });

    // 2. Mostrar la sección seleccionada
    const target = document.getElementById(blockId);
    if (target) {
        target.classList.add('active-block');
    }

    // 3. Actualizar estado visual de los botones de la nav-bar
    if (element) {
        const links = document.querySelectorAll('.nav-link');
        links.forEach(link => link.classList.remove('active'));
        element.classList.add('active');
    }
}

function react(btn) {
    btn.style.color = btn.style.color === 'red' ? 'white' : 'red';
}
