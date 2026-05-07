// Configuración de Firebase para REVOL-T
const firebaseConfig = {
  apiKey: "AIzaSyBuJw5oy_MziKk7FiJQP7RNx4wkBbj0d28",
  authDomain: "revol-t.firebaseapp.com",
  projectId: "revol-t",
  storageBucket: "revol-t.firebasestorage.app",
  messagingSenderId: "920044467992",
  appId: "1:920044467992:web:5c97a4269674ee89",
  measurementId: "G-QJ0VHBGQ94"
};

// Inicializamos Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Hacemos que 'auth' sea accesible para otros archivos
window.auth = firebase.auth();
window.db = firebase.firestore();

console.log("Firebase conectado correctamente a REVOLT");