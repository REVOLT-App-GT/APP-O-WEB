// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADgdGdN4iPwmf8vL1EdYHZflS9XpB6Nt0",
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