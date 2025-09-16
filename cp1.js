// 1. Tourist Registration & QR Code
function registerTourist() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var contact = document.getElementById("contact").value;
  var data = `Name: ${name}, Age: ${age}, Contact: ${contact}`;
  document.getElementById("qrcode").innerHTML = "";
  new QRCode(document.getElementById("qrcode"), data);
  alert("Tourist Registered!");
}

// 2. Map & Geo-fencing
var map = L.map('map').setView([25.0, 82.5], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
var restrictedZone = L.circle([25.002, 82.502], {radius: 100, color:'red'}).addTo(map);

function simulateLocation() {
  var touristLat = 25.001 + Math.random()*0.005;
  var touristLng = 82.501 + Math.random()*0.005;
  L.marker([touristLat, touristLng]).addTo(map).bindPopup("Tourist Location").openPopup();
  var distance = map.distance([touristLat, touristLng], restrictedZone.getLatLng());
  if(distance < restrictedZone.getRadius()) alert("ALERT: Entered Restricted Zone!");
  else alert("Tourist in Safe Zone");
}

// 3. Crowd Alert
function checkCrowd(
    
) {
  var count = parseInt(document.getElementById("crowdCount").value);
  if(count > 50) alert("ALERT: High Crowd Density!");
  else alert("Crowd Safe");
}

// 4. Incident Reporting
function reportIncident() {
  alert("Incident reported! Authorities will be notified.");
}
