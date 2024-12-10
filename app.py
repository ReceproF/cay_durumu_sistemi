from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Verileri saklayacak dosya
data_file = 'data.json'

# Başlangıçta verileri yükle
def load_data():
    try:
        with open(data_file, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return {
            "tea_status": "Çay değil",
            "water_status": "Su yok",
            "tea_packages": "0",
            "tea_times": "Bilgi yok",
            "tea_cost_date": "Bilgi yok"
        }

# Verileri kaydet
def save_data(data):
    with open(data_file, 'w') as file:
        json.dump(data, file)

# API ile verileri gönderme
@app.route('/api/get_data', methods=['GET'])
def get_data():
    data = load_data()
    return jsonify(data)

# Admin paneli ile verileri güncelleme
@app.route('/api/update_data', methods=['POST'])
def update_data():
    new_data = request.json
    save_data(new_data)
    return jsonify({"message": "Veriler güncellendi!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
