from flask import Flask, render_template, request, redirect, url_for
import json

app = Flask(__name__)

# JSON dosyasından veri okuma
def read_data():
    try:
        with open('data.json', 'r', encoding='utf-8') as file:
            return json.load(file)
    except FileNotFoundError:
        return {"cay_durumu": "Çay Hazır Değil", "kaynama_suresi": None}

# JSON dosyasına veri yazma
def write_data(data):
    with open('data.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

# Ana sayfa
@app.route('/')
def home():
    data = read_data()  # JSON dosyasından veriyi al
    cay_durumu = data['cay_durumu']
    kaynama_suresi = data['kaynama_suresi']
    return render_template('index.html', durum=cay_durumu, kaynama_suresi=kaynama_suresi)

# Yönetici sayfası
@app.route('/admin')
def admin():
    return render_template('admin.html')

# Çay durumu ve kaynama süresi güncelleme
@app.route('/update', methods=['POST'])
def update():
    cay_durumu = request.form['durum']
    kaynama_suresi = request.form['kaynamasüresi'] if request.form['kaynamasüresi'] else None

    # Yeni veriyi JSON dosyasına yaz
    data = read_data()
    data['cay_durumu'] = cay_durumu
    data['kaynama_suresi'] = kaynama_suresi
    write_data(data)

    # Güncelleme sonrası ana sayfaya yönlendir
    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
