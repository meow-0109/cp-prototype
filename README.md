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

OUTCOME
<img width="1366" height="768" alt="z7" src="https://github.com/user-attachments/assets/60a23918-ad29-45b8-a817-c496fa8751ab" />
<img width="1366" height="768" alt="Z6" src="https://github.com/user-attachments/assets/a25087a7-4f30-4800-9b74-4b0df73094f5" />
<img width="1366" height="768" alt="Z5" src="https://github.com/user-attachments/assets/2ee8b2f5-53a2-41dd-9791-caa311723288" />
<img width="1366" height="768" alt="Z4" src="https://github.com/user-attachments/assets/864fca19-6a7a-43e8-9acb-7972152f4817" />
<img width="1366" height="768" alt="Z3" src="https://github.com/user-attachments/assets/58e6578c-d226-4c59-b044-b9ac0d320ce6" />
<img width="1366" height="768" alt="Z2" src="https://github.com/user-attachments/assets/92ffa505-c5f5-4e4f-8efb-d47650dbebd9" />
<img width="1366" height="768" alt="Z1" src="https://github.com/user-attachments/assets/f012e6fc-24fa-40ec-ae9a-0eb0b14c30a6" />








