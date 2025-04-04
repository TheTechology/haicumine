// scripts/register.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js';
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js';

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
const db = getFirestore(app);

document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(db, 'users', uid), { email, role });
    window.location.href = 'index.html';
  } catch (error) {
    alert('Eroare la înregistrare: ' + error.message);
  }
});
