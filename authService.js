import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
    from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { app } from "./firebaseConfig.js";

const auth = getAuth(app);

// Función para registrar nuevos usuarios
export const registrarUsuario = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("Registro exitoso:", userCredential.user.uid);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};

// Función para iniciar sesión
export const loginUsuario = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        throw error;
    }
};