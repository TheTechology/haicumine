
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { getFirestore, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";

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

// Salvare cursă în Firestore
export async function saveRide(uid, start, end, distance, cost) {
  try {
    await addDoc(collection(db, "rides"), {
      uid,
      start,
      end,
      distance,
      cost,
      timestamp: new Date()
    });
  } catch (err) {
    console.error("Eroare la salvarea cursei:", err);
  }
}

// Afișare istoric curse
export async function renderRideHistory(uid) {
  const historyDiv = document.createElement("div");
  historyDiv.id = "rideHistory";
  historyDiv.innerHTML = "<h3>Istoric Curse</h3><ul id='rideList'></ul>";
  document.body.appendChild(historyDiv);

  const q = query(collection(db, "rides"), where("uid", "==", uid));
  const querySnapshot = await getDocs(q);
  const rideList = document.getElementById("rideList");

  querySnapshot.forEach((doc) => {
    const ride = doc.data();
    const li = document.createElement("li");
    li.textContent = `De la ${ride.start} la ${ride.end} | ${ride.distance.toFixed(2)} km | ${ride.cost.toFixed(2)} lei`;
    rideList.appendChild(li);
  });
}
