import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";

// El resto del código se queda igual...
const firebaseConfig = {
  apiKey: "AIzaSyADgdGdN4iPwmf8vL1EdYHZf1S9XpB6Nt0",
  authDomain: "revol-t-51396.firebaseapp.com",
  projectId: "revol-t-51396",
  storageBucket: "revol-t-51396.firebasestorage.app",
  messagingSenderId: "1095601985818",
  appId: "1:1095601985818:web:170009664942e3cb7874a3",
  measurementId: "G-CMNB6T7V8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };