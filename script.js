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
// Esperar a que cargue el documento
document.addEventListener('DOMContentLoaded', () => {
    
    const registroBox = document.getElementById('registro-box');
    const loginBox = document.getElementById('login-box');
    const linksToggle = document.querySelectorAll('.toggle-link');

    // Función para cambiar entre cuadros
    linksToggle.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (registroBox.style.display === 'none') {
                registroBox.style.display = 'block';
                loginBox.style.display = 'none';
            } else {
                registroBox.style.display = 'none';
                loginBox.style.display = 'block';
            }
        });
    });

    // Lógica para el botón Registrarse
    document.getElementById('btn-registrar').addEventListener('click', () => {
        const email = document.getElementById('reg-email').value;
        const pass = document.getElementById('reg-pass').value;
        
        if(email === "" || pass === "") {
            alert("Por favor, llena todos los campos");
            return;
        }
        console.log("Registrando usuario:", email);
        // Aquí iría tu código de Firebase más adelante
    });

    // Lógica para el botón Entrar
    document.getElementById('btn-entrar').addEventListener('click', () => {
        const email = document.getElementById('log-email').value;
        const pass = document.getElementById('log-pass').value;

        if(email === "" || pass === "") {
            alert("Introduce tus credenciales");
            return;
        }
        console.log("Iniciando sesión:", email);
    });
});