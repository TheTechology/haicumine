readme_path = f"{base_folder}/README.md"

readme_content = """# HaiCuMine 🚕 – Aplicație Web de Tip Taxi

**HaiCuMine** este o aplicație web progresivă (PWA) scrisă în HTML, CSS și JavaScript care permite interacțiunea între clienți și șoferi, similar cu aplicații de tip ride-hailing (ex: Bolt, Uber).

---

## 🔧 Funcționalități Implementate

### ✅ Autentificare Firebase
- Login și înregistrare cu email și parolă
- Alegere rol: Client / Șofer
- Firebase Authentication + Firestore

### 🗺️ Hartă și Localizare
- Hartă interactivă cu Leaflet.js și OpenStreetMap
- Detectarea poziției curente a utilizatorului
- Alegerea unei destinații și calcul rută

### 📏 Estimare rută și cost
- Integrare cu OpenRouteService API
- Afișare distanță, durată estimată și cost (5 lei/km)

### 🗃️ Istoric curse
- Salvarea detaliilor despre cursă în Firebase Firestore
- Afișarea istoricului individual de curse pentru fiecare utilizator

### 💬 Chat Live
- Chat global între toți utilizatorii conectați (pentru MVP)
- Firebase Realtime Database

### 📲 PWA – Aplicație mobilă
- `manifest.json` + `service-worker.js`
- Instalabilă pe Android/iOS/Desktop
- Pictograme custom cu inițialele HM

---

## 🚀 Tehnologii folosite

- **Frontend:** HTML, CSS, JS Vanilla
- **Hărți:** Leaflet.js + OpenStreetMap
- **Backend-as-a-Service:** Firebase (Auth, Firestore, Realtime DB)
- **Routing API:** OpenRouteService
- **PWA:** Service Worker + Manifest

---

## 🗂️ Structură fișiere

