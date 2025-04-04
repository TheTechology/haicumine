// Chat simplu între utilizatori - scripts/chat.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

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
const db = getDatabase(app);
const auth = getAuth(app);

// Afișare interfață chat după login
onAuthStateChanged(auth, (user) => {
  if (user) {
    const chatBox = document.createElement("div");
    chatBox.id = "chatBox";
    chatBox.innerHTML = `
      <h3>Chat HaiCuMine</h3>
      <div id="messages" style="height: 150px; overflow-y: auto; background: #f1f1f1; padding: 5px; margin-bottom: 10px;"></div>
      <input type="text" id="msgInput" placeholder="Scrie un mesaj..." style="width: 70%;">
      <button id="sendBtn">Trimite</button>
    `;
    document.body.appendChild(chatBox);

    const msgRef = ref(db, "messages");

    document.getElementById("sendBtn").addEventListener("click", () => {
      const msg = document.getElementById("msgInput").value;
      if (msg.trim() !== "") {
        push(msgRef, {
          uid: user.uid,
          email: user.email,
          message: msg,
          timestamp: Date.now()
        });
        document.getElementById("msgInput").value = "";
      }
    });

    onChildAdded(msgRef, (data) => {
      const msg = data.val();
      const msgElem = document.createElement("p");
      msgElem.textContent = `${msg.email}: ${msg.message}`;
      document.getElementById("messages").appendChild(msgElem);
      const msgBox = document.getElementById("messages");
      msgBox.scrollTop = msgBox.scrollHeight;
    });
  }
});
