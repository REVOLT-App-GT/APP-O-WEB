import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyADgdGdN4iPwmf8vL1EdYHZfLS9Xp", // Esta es la llave de tu imagen
  authDomain: "revol-t-51396.firebaseapp.com",
  projectId: "revol-t-51396",
  storageBucket: "revol-t-51396.firebasestorage.app",
  messagingSenderId: "1095601985818",
  appId: "1:1095601985818:web:8c51a02796795400306354" // ID corregido
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);