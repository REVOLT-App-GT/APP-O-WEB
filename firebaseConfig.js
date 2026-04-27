// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuJw5oy_MziKk7FiJQP7RNx4wkBbj0d28",
  authDomain: "revol-t-51396.firebaseapp.com",
  projectId: "revol-t-51396",
  storageBucket: "revol-t-51396.firebasestorage.app",
  messagingSenderId: "920044467992",
  appId: "1:920044467992:web:5c97a4269674ee8964906d",
  measurementId: "G-QJ0VHBGQ94"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
