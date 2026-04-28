import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Datos extraídos de tu consola de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-PonAquiTuLlaveReal", // BUSCA ESTO EN TU CONSOLA (Imagen abajo)
  authDomain: "revolt-t-51396.firebaseapp.com",
  projectId: "revolt-t-51396",
  storageBucket: "revolt-t-51396.appspot.com",
  messagingSenderId: "36551823610",
  appId: "1:36551823610:web:8665c71a36768371306354"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);