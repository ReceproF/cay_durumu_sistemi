<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Paneli</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .header {
            background-color: #FF5722;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 2em;
        }
        .container {
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        .section {
            background-color: #F5F5F5;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        }
        h2 {
            margin-bottom: 10px;
            font-size: 1.5em;
        }
        button {
            font-size: 1em;
            padding: 10px;
            margin: 5px;
            border: none;
            cursor: pointer;
        }
        .green-button {
            background-color: #4CAF50;
            color: white;
        }
        .grey-button {
            background-color: #9E9E9E;
            color: white;
        }
        .water-button {
            background-color: #E0E0E0;
            color: #333;
        }
        .water-button.active {
            background-color: #4CAF50;
            color: white;
        }
        input {
            font-size: 1em;
            padding: 10px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="header">Admin Paneli</div>
    <div class="container">
        <div class="section">
            <h2>Çay Durumu Yönetimi:</h2>
            <button class="green-button" onclick="updateTeaStatus(true)">Çayı Hazır Yap</button>
            <button class="grey-button" onclick="updateTeaStatus(false)">Çayı Hazır Yapma</button>
        </div>
        <div class="section">
            <h2>Su Durumu Yönetimi:</h2>
            <button class="water-button active" onclick="updateWaterTimer(0)">Su Hazır</button>
            <button class="water-button" onclick="updateWaterTimer(5)">5 Dakika</button>
            <button class="water-button" onclick="updateWaterTimer(10)">10 Dakika</button>
            <button class="water-button" onclick="updateWaterTimer(15)">15 Dakika</button>
            <button class="water-button" onclick="updateWaterTimer(20)">20 Dakika</button>
        </div>
        <div class="section">
            <h2>Alt Kısım Yönetimi:</h2>
            <label>Mevcut Paket Çay:</label>
            <input type="number" id="tea-stock-input" placeholder="10">
            <label>Muhtemel Çay Saatleri:</label>
            <input type="text" id="tea-times-input" placeholder="10:00, 14:00, 16:00">
            <label>Çay İçin Toplanan Para ve Tarihi:</label>
            <input type="text" id="tea-money-input" placeholder="50 TL - 01.01.2024">
            <button onclick="updateFooter()">Güncelle</button>
        </div>
    </div>
    <script>
        async function updateTeaStatus(isReady) {
            await fetch('/update-status', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tea_ready: isReady })
            });
            alert("Çay durumu güncellendi!");
        }

        async function updateWaterTimer(minutes) {
            await fetch('/update-water-status', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ water_timer: minutes })
            });
            alert("Su kaynama süresi güncellendi!");
        }

        async function updateFooter() {
            const teaStock = document.getElementById('tea-stock-input').value;
            const teaTimes = document.getElementById('tea-times-input').value;
            const teaMoney = document.getElementById('tea-money-input').value;

            await fetch('/update-footer', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tea_stock: teaStock, tea_times: teaTimes, tea_money: teaMoney })
            });
            alert("Alt kısım bilgileri güncellendi!");
        }
    </script>
</body>
</html>
