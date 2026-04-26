// Base de Datos Multimedia (Actividades mezcladas)
const multimediaDB = [
    { type: 'Finanzas', title: 'Invertir en 2026', desc: 'Cómo gestionar tus cobros hoy.', color: '#1a1a2e' },
    { type: 'Deporte', title: 'Sprint y Velocidad', desc: 'Técnica de braceo para corredores.', color: '#004d40' },
    { type: 'Podcast', title: 'REVOLT Talk', desc: 'Entrevista con expertos en economía.', color: '#4a148c' },
    { type: 'Aprender', title: 'Contabilidad Básica', desc: 'Activos y Pasivos en 60 segundos.', color: '#b71c1c' }
];

// Algoritmo de Usuario y Persistencia
let userData = JSON.parse(localStorage.getItem('REVOLT_USER')) || { name: 'Misael', fav: 'Multimedia', saldo: 0 };

function loadFeed() {
    const feed = document.getElementById('main-feed');
    // El algoritmo ordena por relevancia (aquí simulado por rotación)
    feed.innerHTML = multimediaDB.map(item => `
        <div class="activity-card" style="background-color: ${item.color}">
            <div class="content-overlay">
                <span style="color: var(--revolt-cyan)">#${item.type}</span>
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <button onclick="alert('Iniciando actividad...')">Ver Ahora</button>
            </div>
        </div>
    `).join('');
}

// Router de Actividades
function router(path) {
    const feed = document.getElementById('main-feed');
    if (path === 'cobrar') {
        feed.innerHTML = `
            <div style="padding: 100px 20px; text-align: center;">
                <h2>Registrar Cobro</h2>
                <input type="number" id="monto" placeholder="Monto Q">
                <button onclick="saveData()">Guardar en Cuenta</button>
                <p>Saldo en App: Q <span id="val">${userData.saldo}</span></p>
            </div>`;
    } else if (path === 'inicio') {
        loadFeed();
    } else {
        feed.innerHTML = `<div style="padding:100px 20px;"><h2>Sección ${path}</h2><p>Cargando multimedia...</p></div>`;
    }
}

// Lógica de Datos y Guardado
function saveData() {
    const val = document.getElementById('monto').value;
    if(val) {
        userData.saldo += parseFloat(val);
        localStorage.setItem('REVOLT_USER', JSON.stringify(userData));
        document.getElementById('val').textContent = userData.saldo;
        alert("Datos sincronizados con éxito");
    }
}

// Detector de Internet
function updateNet() {
    const dot = document.getElementById('dot');
    const txt = document.getElementById('net-text');
    if (navigator.onLine) {
        dot.style.backgroundColor = "var(--revolt-cyan)";
        txt.textContent = "Online";
    } else {
        dot.style.backgroundColor = "var(--revolt-pink)";
        txt.textContent = "Offline";
    }
}

// Inicio de App
window.addEventListener('online', updateNet);
window.addEventListener('offline', updateNet);
updateNet();
loadFeed();