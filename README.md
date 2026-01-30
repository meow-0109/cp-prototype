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

## 📂 Project Structure



## 🏗️ System Architecture



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


<img width="1366" height="768" alt="Z1" src="https://github.com/user-attachments/assets/1d16210d-47d4-452f-94f2-2495c157cf57" />
<img width="1366" height="768" alt="z7" src="https://github.com/user-attachments/assets/813d6c50-4813-47e6-afc5-11b445d8ac97" />
<img width="1366" height="768" alt="Z6" src="https://github.com/user-attachments/assets/52e3acb9-260d-47a8-9d53-fff1ad995ffe" />
<img width="1366" height="768" alt="Z5" src="https://github.com/user-attachments/assets/4c14bea4-56ae-48b9-af26-d55914660b16" />
<img width="1366" height="768" alt="Z4" src="https://github.com/user-attachments/assets/e71549fa-e665-487e-be05-7fdfdc0181c9" />
<img width="1366" height="768" alt="Z3" src="https://github.com/user-attachments/assets/c6d6b9ab-fa47-44c5-b502-166b7e402bd7" />
<img width="1366" height="768" alt="Z2" src="https://github.com/user-attachments/assets/1e807ec4-f0ee-4d05-89f1-e0ea04ca6044" />





