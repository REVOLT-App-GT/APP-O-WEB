import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const msg = document.getElementById("mensaje-status");

// Función para Registrar Usuario
window.registrarUsuario = async () => {
    const email = document.getElementById("reg-email").value;
    const pass = document.getElementById("reg-pass").value;

    try {
        msg.innerText = "Creando cuenta...";
        msg.style.color = "orange";
        await createUserWithEmailAndPassword(auth, email, pass);
        msg.innerText = "¡Cuenta creada con éxito!";
        msg.style.color = "cyan";
    } catch (error) {
        msg.innerText = "Error: " + error.message;
        msg.style.color = "red";
    }
};

// Función para Iniciar Sesión
window.iniciarSesion = async () => {
    const email = document.getElementById("log-email").value;
    const pass = document.getElementById("log-pass").value;

    try {
        msg.innerText = "Iniciando...";
        msg.style.color = "orange";
        await signInWithEmailAndPassword(auth, email, pass);
        msg.innerText = "Bienvenido a REVOL-T";
        msg.style.color = "cyan";
    } catch (error) {
        msg.innerText = "Error: " + error.message;
        msg.style.color = "red";
    }
};

// Control de vistas (Cambiar entre registro e inicio)
window.toggleAuth = () => {
    const regBox = document.getElementById("registro-box");
    const logBox = document.getElementById("login-box");
    if (regBox.style.display === "none") {
        regBox.style.display = "block";
        logBox.style.display = "none";
    } else {
        regBox.style.display = "none";
        logBox.style.display = "block";
    }
};