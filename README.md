
 <img width="1366" height="768" alt="Z1" src="https://github.com/user-attachments/assets/45e4700b-dccd-4a2c-9a9e-37c0d18b13a2" />
 <img width="1366" height="768" alt="z7" src="https://github.com/user-attachments/assets/97ebb7a2-9117-478b-9926-319cf93359ad" />
<img width="1366" height="768" alt="Z6" src="https://github.com/user-attachments/assets/64180154-a43b-4472-b806-3020f2371627" />
<img width="1366" height="768" alt="Z5" src="https://github.com/user-attachments/assets/f3d35f0c-6af0-478b-8220-ca812bdfbcae" />
<img width="1366" height="768" alt="Z4" src="https://github.com/user-attachments/assets/448fdb08-116f-45ac-9484-4d699718f4dc" />
<img width="1366" height="768" alt="Z3" src="https://github.com/user-attachments/assets/2d10b907-596b-47f9-8c0f-c460b904fe45" />
<img width="1366" height="768" alt="Z2" src="https://github.com/user-attachments/assets/59e85af6-5336-46b2-b90d-a4456fa05614" />


 
 🛡️ Smart Tourist Safety System

The **Smart Tourist Safety System** is a comprehensive web-based safety platform designed to enhance the security of tourists using modern web technologies, real-time location tracking, QR-code–based identification, and emergency incident reporting.  
The system aims to assist tourists, administrators, and authorities by providing timely alerts, live monitoring, and centralized safety management.

 Problem Statement

Tourists frequently encounter safety challenges such as unfamiliar environments, restricted zones, lack of real-time guidance, delayed emergency response, and insufficient coordination with authorities. Traditional safety mechanisms are mostly reactive, manual, and fragmented, making it difficult to monitor tourist movement or respond quickly during emergencies. There is a need for a **smart, real-time, and centralized safety system** that ensures tourist protection while traveling.

 💡 Proposed Solution

The Smart Tourist Safety System addresses these challenges by integrating **QR-based tourist registration**, **real-time GPS tracking using OpenStreetMap**, **geo-fencing for restricted zones**, and **incident reporting through a web dashboard**. A Flask-based backend securely stores tourist, location, and incident data in a MySQL database. The system enables proactive safety monitoring, instant alerts, and efficient data management for authorities.


## ✨ Key Features

- 🪪 Tourist Registration with QR Code**
  - Registers tourists with name, age, and contact details
  - Generates a unique QR code for identification

- 📍 Live Location Tracking**
  - Real-time GPS tracking using Leaflet and OpenStreetMap
  - Automatic map centering and follow mode

- 🚧 Geo-Fencing & Restricted Zone Alerts**
  - Alerts tourists when entering restricted or unsafe areas

- 🚨 Incident / Emergency Reporting**
  - Allows tourists to report emergencies instantly
  - Stores incident details in the database

- 👥 Crowd Density Check**
  - Evaluates crowd levels and displays warnings

- 📊 Admin APIs**
  - Fetch registered tourists, incidents, and location data

- 📱 **Responsive Dashboard**
  - Sidebar navigation with Overview, Registration, Live Location, Emergency, and Profile sections


---

## 🛠️ Technologies Used

### Frontend
- HTML5
- Tailwind CSS
- JavaScript
- Leaflet.js (OpenStreetMap)
- QRCode.js

### Backend
- Python (Flask)
- Flask-CORS

### Database
- MySQL

---

## ⚙️ Installation & Setup

 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/smart-tourist-safety.git
cd smart-tourist-safety

pip install -r requirements.txt


CREATE DATABASE tourist_safety;

USE tourist_safety;

CREATE TABLE tourists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    contact VARCHAR(20),
    qr_text TEXT,
    hash_id VARCHAR(255)
);

CREATE TABLE incidents (
    id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT,
    ts TIMESTAMP
);

CREATE TABLE locations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lat DOUBLE,
    lng DOUBLE,
    ts BIGINT
);
run backend
python app.py

5️⃣ Open the Application
Open index.html in your browser
or serve it using Flask if required




