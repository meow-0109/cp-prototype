const BASE_URL = "http://127.0.0.1:5000/api";

async function loadTourists() {
  const res = await fetch(`${BASE_URL}/getTourists`);
  const data = await res.json();
  const tbody = document.querySelector("#touristTable tbody");
  tbody.innerHTML = "";
  data.forEach(t => {
    tbody.innerHTML += `
      <tr>
        <td class="border p-2">${t.name}</td>
        <td class="border p-2">${t.age}</td>
        <td class="border p-2">${t.contact}</td>
        <td class="border p-2">${t.ts}</td>
      </tr>`;
  });
}

async function loadIncidents() {
  const res = await fetch(`${BASE_URL}/getIncidents`);
  const data = await res.json();
  const tbody = document.querySelector("#incidentTable tbody");
  tbody.innerHTML = "";
  data.forEach(i => {
    tbody.innerHTML += `
      <tr>
        <td class="border p-2">${i.text}</td>
        <td class="border p-2">${i.time}</td>
      </tr>`;
  });
}

async function loadCrowd() {
  const res = await fetch(`${BASE_URL}/crowdStatus`);
  const data = await res.json();
  const color = data.status === "safe" ? "text-green-600" :
                data.status === "warning" ? "text-yellow-600" : "text-red-600";
  document.getElementById("crowdInfo").innerHTML = `
    <p>Total tourists: <b>${data.total}</b></p>
    <p>Status: <span class="${color} font-semibold">${data.status.toUpperCase()}</span></p>`;
}

window.onload = () => {
  loadTourists();
  loadIncidents();
  loadCrowd();
  setInterval(() => { loadCrowd(); }, 10000);
};
