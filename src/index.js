import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// REACT_APP_API_KEY=AIzaSyBUremfd_lagLh1I00vEEnM7vjfcZXz_-M

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
