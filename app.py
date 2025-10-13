from flask import Flask, request, jsonify
import mysql.connector
from mysql.connector import Error
import time
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)  # allow all origins

# ------------------ DB CONNECTION ------------------
def get_db_connection():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="root",                 # your MySQL username
            password="Rutuu@20050901",   # your MySQL password
            database="tourist_safety"    # your database name
        )
        return conn
    except Error as e:
        print(f"❌ Error connecting to MySQL: {e}")
        return None

# ------------------ DEFAULT ROUTE ------------------
@app.route("/")
def home():
    return "✅ Flask + MySQL Backend Connected!"

# ------------------ TOURIST REGISTRATION ------------------

@app.route("/api/register", methods=["POST"])
def api_register():
    data = request.get_json()
    name = data.get("name", "Anonymous")
    age = str(data.get("age", "-"))
    contact = data.get("contact", "-")
    
    digital_id = ''.join(random.choices(string.ascii_uppercase + string.digits, k=12))
    reg_date = time.strftime('%Y-%m-%d')

    conn = get_db_connection()
    if conn is None:
        return jsonify({"error": "DB connection failed"}), 500

    try:
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO tourists (name, age, contact, registration_date, digital_id) VALUES (%s,%s,%s,%s,%s)",
            (name, age, contact, reg_date, digital_id)
        )
        conn.commit()
        return jsonify({
            "message": "✅ Tourist registered successfully!",
            "registrationDate": reg_date,
            "digitalID": digital_id
        })
    except Error as e:
        print("❌ MySQL Error during registration:", e)
        return jsonify({"error": "Registration failed"}), 500
    finally:
        cursor.close()
        conn.close()
# ------------------ INCIDENT REPORTING ------------------
@app.route("/api/reportIncident", methods=["POST"])
def report_incident():
    data = request.get_json()
    text = data.get("text")
    if not text:
        return jsonify({"error": "Incident text is required"}), 400
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "INSERT INTO incidents (description, ts) VALUES (%s, NOW())",
            (text,)
        )
        conn.commit()
        conn.close()
        return jsonify({"message": "✅ Incident reported successfully!"})
    except Error as e:
        print("❌ MySQL Error while reporting incident:", e)
        return jsonify({"error": "Failed to report incident"}), 500

# ------------------ LOCATION UPDATES ------------------
@app.route("/api/updateLocation", methods=["POST"])
def update_location():
    data = request.get_json()
    lat = data.get("lat")
    lng = data.get("lng")
    ts = int(time.time())
    try:
        conn = get_db_connection()
        if conn is None:
            return jsonify({"error": "Database connection failed"}), 500
        cursor = conn.cursor()
        cursor.execute("INSERT INTO locations (lat, lng, ts) VALUES (%s, %s, %s)", (lat, lng, ts))
        conn.commit()
        conn.close()
        return jsonify({"message": "📍 Location updated successfully!"})
    except Error as e:
        print("❌ MySQL Error while updating location:", e)
        return jsonify({"error": "Failed to update location"}), 500

# ------------------ FETCH DATA ROUTES ------------------
@app.route("/api/tourists", methods=["GET"])
def get_tourists():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM tourists ORDER BY id DESC")
        rows = cursor.fetchall()
        conn.close()
        return jsonify(rows)
    except Error as e:
        return jsonify({"error": "Failed to fetch tourists"}), 500

@app.route("/api/incidents", methods=["GET"])
def get_incidents():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM incidents ORDER BY id DESC")
        rows = cursor.fetchall()
        conn.close()
        return jsonify(rows)
    except Error as e:
        return jsonify({"error": "Failed to fetch incidents"}), 500

@app.route("/api/locations", methods=["GET"])
def get_locations():
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM locations ORDER BY id DESC LIMIT 100")
        rows = cursor.fetchall()
        conn.close()
        return jsonify(rows)
    except Error as e:
        return jsonify({"error": "Failed to fetch locations"}), 500

if __name__ == "__main__":
    app.run(debug=True)
