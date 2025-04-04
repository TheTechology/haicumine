// scripts/login.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDMtVkwG5S3pdVLXlcntHxXkNEd8Pv2CIE",
  authDomain: "hacumine.firebaseapp.com",
  projectId: "hacumine",
  storageBucket: "hacumine.firebasestorage.app",
  messagingSenderId: "829738448623",
  appId: "1:829738448623:web:aae8a10b6cbdd918c84d1a",
  measurementId: "G-4KC7QMREM4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = 'index.html';
    })
    .catch((error) => {
      alert('Eroare la autentificare: ' + error.message);
    });
});
