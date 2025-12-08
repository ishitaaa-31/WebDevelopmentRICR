const coordinates = {
  "Jammu and Kashmir": { x: 360, y: 120 },
  Ladakh: { x: 520, y: 110 },
  "Himachal Pradesh": { x: 360, y: 250 },
  Punjab: { x: 300, y: 280 },
  Haryana: { x: 320, y: 320 },
  Delhi: { x: 335, y: 280 },
  Uttarakhand: { x: 430, y: 300 },

  Rajasthan: { x: 240, y: 470 },
  "Uttar Pradesh": { x: 430, y: 420 },
  Bihar: { x: 580, y: 470 },

  Sikkim: { x: 680, y: 390 },
  "Arunachal Pradesh": { x: 820, y: 420 },
  Assam: { x: 760, y: 450 },
  Meghalaya: { x: 730, y: 470 },
  Nagaland: { x: 840, y: 420 },
  Manipur: { x: 840, y: 500 },
  Mizoram: { x: 810, y: 540 },
  Tripura: { x: 780, y: 540 },

  "Madhya Pradesh": { x: 320, y: 600 },
  Chhattisgarh: { x: 440, y: 650 },

  Gujarat: { x: 150, y: 550 },
  Maharashtra: { x: 260, y: 720 },

  Jharkhand: { x: 560, y: 560 },
  Odisha: { x: 580, y: 700 },
  "West Bengal": { x: 660, y: 600 },

  Telangana: { x: 360, y: 820 },
  "Andhra Pradesh": { x: 380, y: 880 },
  Karnataka: { x: 280, y: 990 },
  "Tamil Nadu": { x: 370, y: 1100 },
  Kerala: { x: 280, y: 1100 },

  Goa: { x: 200, y: 870 },
  Chandigarh: { x: 320, y: 280 },
};

function Marker(state) {
  const marker = document.createElement("div");
  marker.innerText = "🚩";
  marker.style.width = "20px";
  marker.style.height = "20px";
  marker.className = "red";
  marker.style.position = "absolute";
  marker.style.left = coordinates[state].x + "px";
  marker.style.top = coordinates[state].y + "px";
  marker.title = state;

  document.getElementById("im").appendChild(marker);
}

function search() {
  const state = document.getElementById("state").value;
  Marker(state);
}
