// 1. Tourist Registration & QR Code + Backend API
function registerTourist() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let contact = document.getElementById("contact").value;

    if (!name || !contact) {
        alert("⚠️ Please enter Name and Contact!");
        return;
    }

    // Generate QR code text
    let qrData = `Name: ${name}, Age: ${age}, Contact: ${contact}`;
    document.getElementById("qrcode").innerHTML = "";
    new QRCode(document.getElementById("qrcode"), qrData);

    // Prepare data for backend
    let payload = {
        name: name,
        age: age,
        contact: contact
    };

    // Send to Flask backend
    fetch("http://127.0.0.1:5000/register_tourist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => alert(data.message || "✅ Tourist registered!"))
    .catch(err => alert("❌ Error connecting to server: " + err));
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
    if(distance < restrictedZone.getRadius()) alert("🚨 ALERT: Entered Restricted Zone!");
    else alert("✅ Tourist in Safe Zone");
}

// 3. Crowd Alert
function checkCrowd() {
    var count = parseInt(document.getElementById("crowdCount").value);
    if (isNaN(count)) {
        alert("⚠️ Please enter a valid number");
        return;
    }
    if(count > 50) alert("🚨 ALERT: High Crowd Density!");
    else alert("✅ Crowd Safe");
}

// 4. Incident Reporting
function reportIncident() {
    let description = prompt("Enter incident description:");
    let location = prompt("Enter location:");

    if (!description || !location) {
        alert("⚠️ Please provide description and location");
        return;
    }

    let payload = { description, location };

    fetch("http://127.0.0.1:5000/report_incident", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => alert(data.message || "🚨 Incident reported!"))
    .catch(err => alert("❌ Error reporting incident: " + err));
}
