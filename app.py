from flask import Flask, render_template, request, jsonify
import time

app = Flask(__name__)

# Çay ve su durumu için global değişkenler
data = {
    "cay_durumu": "Çay Hazır Değil",
    "su_durumu": "Su Hazır Değil",
    "cay_sayaci": 0,
    "su_sayaci": 0,
    "mevcut_cay": "10",
    "cay_saatleri": "",
    "cay_para_tarihi": ""
}

@app.route("/")
def index():
    return render_template("index.html", data=data)

@app.route("/admin")
def admin():
    return render_template("admin.html", data=data)

@app.route("/update", methods=["POST"])
def update():
    key = request.json.get("key")
    value = request.json.get("value")
    if key in data:
        data[key] = value
        return jsonify({"success": True})
    return jsonify({"success": False}), 400

@app.route("/start_timer", methods=["POST"])
def start_timer():
    timer_type = request.json.get("type")
    duration = int(request.json.get("duration", 0))
    if timer_type == "su":
        data["su_sayaci"] = duration
    elif timer_type == "cay":
        data["cay_sayaci"] = duration
    return jsonify({"success": True})

@app.route("/decrease_timer", methods=["POST"])
def decrease_timer():
    for timer in ["su_sayaci", "cay_sayaci"]:
        if data[timer] > 0:
            data[timer] -= 1
            if data[timer] == 0:
                if timer == "su_sayaci":
                    data["su_durumu"] = "Su Hazır!"
                elif timer == "cay_sayaci":
                    data["cay_durumu"] = "Çay Hazır!"
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
