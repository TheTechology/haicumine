import { saveRide, renderRideHistory } from "./rides.js";
// scripts/app.js

let map;
let marker;
let currentRole = null;

const initMap = () => {
  map = L.map('map').setView([45.7, 21.3], 13); // Default center: Timișoara

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      map.setView([lat, lng], 15);
      marker = L.marker([lat, lng]).addTo(map).bindPopup("Ești aici").openPopup();
    });
  }
};

const renderClientActions = () => {
  const actions = document.getElementById("actions");
  actions.innerHTML = '<button id="requestRide">Cere o cursă</button>';
  document.getElementById("requestRide").onclick = () => {
    alert("Cererea a fost trimisă! Un șofer o va accepta.");
  };
};

const renderDriverActions = () => {
  const actions = document.getElementById("actions");
  actions.innerHTML = '<button id="acceptRide">Acceptă cursă</button>';
  document.getElementById("acceptRide").onclick = () => {
    alert("Ai acceptat o cursă! Navighează spre client.");
  };
};

// Setare roluri
const btnClient = document.getElementById("btn-client");
const btnSofer = document.getElementById("btn-sofer");

btnClient.addEventListener("click", () => {
  currentRole = "client";
  initMap();
  renderClientActions();
  createRouteForm();
});

btnSofer.addEventListener("click", () => {
  currentRole = "sofer";
  initMap();
  renderDriverActions();
  createRouteForm();
});

const apiKeyORS = "5b3ce3597851110001cf6248c2d7043931b94cc3812d18800930ee6a";
const costPerKm = 5;

const createRouteForm = () => {
  const actions = document.getElementById("actions");
  actions.innerHTML += `
    <div class="route-form">
      <input type="text" id="destination" placeholder="Introdu destinația (lat,lon)" />
      <button id="calcRoute">Calculează ruta</button>
      <div id="routeInfo"></div>
    </div>
  `;

  document.getElementById("calcRoute").addEventListener("click", async () => {
    const destinationInput = document.getElementById("destination").value;
    const [lat2, lon2] = destinationInput.split(",").map(Number);

    if (!marker) {
      alert("Locația curentă nu este disponibilă.");
      return;
    }

    const [lat1, lon1] = [marker.getLatLng().lat, marker.getLatLng().lng];

    const response = await fetch("https://api.openrouteservice.org/v2/directions/driving-car/geojson", {
      method: "POST",
      headers: {
        "Authorization": apiKeyORS,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        coordinates: [
          [lon1, lat1],
          [lon2, lat2]
        ]
      })
    });

    const data = await response.json();

    if (data && data.features && data.features[0]) {
      const coords = data.features[0].geometry.coordinates.map(c => [c[1], c[0]]);
      const distance = data.features[0].properties.summary.distance / 1000;
      const duration = data.features[0].properties.summary.duration / 60;
      const cost = distance * costPerKm;

      L.polyline(coords, { color: "blue" }).addTo(map);

      document.getElementById("routeInfo").innerHTML = `
        <p><strong>Distanță:</strong> ${distance.toFixed(2)} km</p>
        <p><strong>Durată estimată:</strong> ${duration.toFixed(1)} min</p>
        <p><strong>Cost estimativ:</strong> ${cost.toFixed(2)} lei</p>
      `;

    // Salvăm cursa în istoric
    import('https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js').then(({ getAuth, onAuthStateChanged }) => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          saveRide(user.uid, `${lat1},${lon1}`, `${lat2},${lon2}`, distance, cost);
          renderRideHistory(user.uid);
        }
      });
    });
    
    } else {
      alert("Nu am putut calcula ruta.");
    }
  });
};
