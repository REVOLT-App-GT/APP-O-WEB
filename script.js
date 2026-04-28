import { auth } from "./firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-.js";

const msg = document.getElementById("mensaje-status");

// Función de Registro
window.registrarUsuario = async () => {
    const email = document.getElementById("reg-email").value;
    const pass = document.getElementById("reg-pass").value;
    try {
        await createUserWithEmailAndPassword(auth, email, pass);
        msg.innerText = "¡Usuario registrado!";
        msg.style.color = "cyan";
    } catch (error) {
        msg.innerText = "Error: " + error.message;
        msg.style.color = "red";
    }
};

// Función de Inicio de Sesión
window.iniciarSesion = async () => {
    const email = document.getElementById("log-email").value;
    const pass = document.getElementById("log-pass").value;
    try {
        await signInWithEmailAndPassword(auth, email, pass);
        msg.innerText = "Acceso concedido. ¡Bienvenido!";
        msg.style.color = "cyan";
    } catch (error) {
        msg.innerText = "Error: " + error.message;
        msg.style.color = "red";
    }
};