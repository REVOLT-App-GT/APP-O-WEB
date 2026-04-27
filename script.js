// 1. DETECTOR DE RED (Lo primero que corre)
function updateNet() {
    const dot = document.getElementById('dot');
    const txt = document.getElementById('net-text');
    
    if (navigator.onLine) {
        dot.style.background = "#00ff00"; // Verde
        txt.innerText = "Online";
    } else {
        dot.style.background = "#ff0000"; // Rojo
        txt.innerText = "Sin conexión";
    }
}

window.addEventListener('online', updateNet);
window.addEventListener('offline', updateNet);
updateNet(); // Ejecución inmediata al cargar

// 2. CONFIGURACIÓN FIREBASE
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "revolt-app.firebaseapp.com",
  projectId: "revolt-app",
  storageBucket: "revolt-app.appspot.com",
  messagingSenderId: "TU_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 3. CAMBIO DE PANTALLAS (Login/Registro)
window.toggleAuth = function() {
    const regBox = document.getElementById('registro-box');
    const logBox = document.getElementById('login-box');
    const msg = document.getElementById('mensaje-status');
    
    msg.innerText = ""; // Limpia mensajes al cambiar
    if (regBox.style.display === "none") {
        regBox.style.display = "block";
        logBox.style.display = "none";
    } else {
        regBox.style.display = "none";
        logBox.style.display = "block";
    }
};

// 4. LÓGICA DE REGISTRO
document.getElementById('registro-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('reg-email').value;
    const pass = document.getElementById('reg-pass').value;
    const msg = document.getElementById('mensaje-status');

    if (!navigator.onLine) {
        msg.innerText = "Error: No hay conexión a internet";
        msg.style.color = "red";
        return;
    }

    try {
        msg.innerText = "Creando cuenta...";
        msg.style.color = "orange";
        await createUserWithEmailAndPassword(auth, email, pass);
        msg.innerText = "¡Cuenta creada! Entrando...";
        msg.style.color = "cyan";
        // Aquí podrías redirigir: window.location.href = "inicio.html";
    } catch (error) {
        msg.innerText = "Error: " + error.message;
        msg.style.color = "red";
    }
});

// 5. LÓGICA DE LOGIN
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('log-email').value;
    const pass = document.getElementById('log-pass').value;
    const msg = document.getElementById('mensaje-status');

    try {
        msg.innerText = "Verificando...";
        msg.style.color = "orange";
        await signInWithEmailAndPassword(auth, email, pass);
        msg.innerText = "¡Bienvenido!";
        msg.style.color = "cyan";
    } catch (error) {
        msg.innerText = "Correo o clave incorrectos";
        msg.style.color = "red";
    }
});