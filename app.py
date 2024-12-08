from flask import Flask, request, jsonify, render_template   

app = Flask(__name__)

# Global Variables
tea_ready = False
water_timer = 0
tea_stock = "10"
tea_times = "10:00, 14:00, 16:00"
tea_money = "50 TL - 01.01.2024"

@app.route('/')
def index():
    global tea_ready, water_timer, tea_stock, tea_times, tea_money
    return render_template('index.html', tea_ready=tea_ready, water_timer=water_timer,
                           tea_stock=tea_stock, tea_times=tea_times, tea_money=tea_money)

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/status', methods=['GET'])
def get_status():
    global tea_ready, water_timer, tea_stock, tea_times, tea_money
    return jsonify({
        "tea_ready": tea_ready,
        "water_timer": water_timer,
        "tea_stock": tea_stock,
        "tea_times": tea_times,
        "tea_money": tea_money
    })

@app.route('/update-status', methods=['POST'])
def update_tea_status():
    global tea_ready
    tea_ready = request.json['tea_ready']
    return jsonify({"message": "Çay durumu güncellendi!"})

@app.route('/update-water-status', methods=['POST'])
def update_water_status():
    global water_timer
    water_timer = request.json['water_timer']
    return jsonify({"message": "Su kaynama durumu güncellendi!"})

@app.route('/update-footer', methods=['POST'])
def update_footer():
    global tea_stock, tea_times, tea_money
    tea_stock = request.json['tea_stock']
    tea_times = request.json['tea_times']
    tea_money = request.json['tea_money']
    return jsonify({"message": "Alt kısım bilgileri güncellendi!"})

@app.route('/decrease-timer', methods=['POST'])
def decrease_timer():
    global water_timer
    if water_timer > 0:
        water_timer -= 1
    return jsonify({"water_timer": water_timer})

if __name__ == '__main__':
    app.run(debug=True)
