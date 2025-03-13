// src/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBUremfd_lagLh1I00vEEnM7vjfcZXz_-M",
    authDomain: "primevideo-b5efa.firebaseapp.com",
    projectId: "primevideo-b5efa",
    storageBucket: "primevideo-b5efa.firebasestorage.app",
    messagingSenderId: "201260288870",
    appId: "1:201260288870:web:d3a919665cf596b7c6d6a7",
    measurementId: "G-HTMYWMG3DK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
