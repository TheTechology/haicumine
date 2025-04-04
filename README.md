# HaiCuMine 🚕 – Aplicație Web de Tip Taxi

**HaiCuMine** este o aplicație web progresivă (PWA) creată în HTML, CSS și JavaScript care conectează clienți și șoferi în timp real. Inspirată de aplicații precum Bolt sau Uber, HaiCuMine este 100% în limba română și adaptată pentru web și mobil.

---

## 🔧 Funcționalități implementate

### ✅ Autentificare Firebase
- Înregistrare/Login cu email și parolă
- Alegere rol: Client sau Șofer
- Firebase Authentication + Firestore

### 🗺️ Hartă și localizare
- Integrare Leaflet.js + OpenStreetMap
- Detectarea poziției curente
- Alegerea destinației și trasarea rutei

### 📏 Estimare rută și cost
- Integrare cu OpenRouteService API
- Afișare distanță (km), durată estimativă și cost (calculat la 5 lei/km)

### 🗃️ Istoric curse
- Salvarea fiecărei curse în Firebase Firestore
- Afișare istoric personalizat pentru fiecare utilizator

### 💬 Chat Live
- Chat simplu în timp real între utilizatorii autentificați
- Firebase Realtime Database

### 📲 PWA – Aplicație mobilă instalabilă
- Suport pentru `manifest.json` + `service-worker.js`
- Instalabilă ca aplicație pe Android, iOS și Desktop
- Pictograme personalizate cu inițialele HM

---

## 🧰 Tehnologii utilizate

- HTML5, CSS3, JavaScript Vanilla
- Firebase Authentication + Firestore + Realtime Database
- Leaflet.js + OpenStreetMap
- OpenRouteService API (routing & estimare)
- PWA (Progressive Web App)

---

## 🗂️ Structura proiectului


---

## 🚀 Instalare rapidă

1. Creează un proiect Firebase și activează:
   - Authentication (Email/Password)
   - Firestore Database
   - Realtime Database

2. Copiază cheia Firebase (`firebaseConfig`) în fișierele JS:
   - `login.js`, `register.js`, `chat.js`, `rides.js`

3. Urcă proiectul pe [Netlify](https://netlify.com) sau activează [GitHub Pages](https://pages.github.com)

---

## 🌐 GitHub Pages (opțional)

1. Mergi la **Settings > Pages**
2. La „Source” selectează `main` și `/ (root)`
3. GitHub va genera automat un link public

---

## 👨‍💻 Creat de

**Marian Dumitru**  
Frontend Developer & UX Designer  
📍 România • 2025  
🔗 [https://github.com/TheTechology](https://github.com/TheTechology)

---

## 📜 Licență

MIT – Liber de folosit și adaptat în proiecte educaționale sau comerciale cu atribuire.

