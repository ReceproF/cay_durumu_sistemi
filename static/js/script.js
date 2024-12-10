// Çay Durumu ve Sayaç
function setTeaStatus(status, timer = 0) {
    fetch('/update-status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tea_ready: status
        })
    }).then(response => response.json())
      .then(data => {
          alert("Çay durumu güncellendi: " + status);
          updateDisplay(); // Ekranı güncelle
      });
}

// Su Durumu ve Sayaç
function setWaterStatus(status, timer = 0) {
    fetch('/update-water-status', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            water_timer: timer
        })
    }).then(response => response.json())
      .then(data => {
          alert("Su durumu güncellendi: " + status);
          updateDisplay(); // Ekranı güncelle
      });
}

// Ek Bilgiler
function updateTeaPackages() {
    const value = document.getElementById('tea-packages').value;
    fetch('/update-footer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            tea_stock: value,
            tea_times: document.getElementById('tea-times').value,
            tea_money: document.getElementById('tea-cost-date').value
        })
    }).then(response => response.json())
      .then(data => {
          alert("Mevcut Çay Paket Sayısı güncellendi!");
          updateDisplay(); // Ekranı güncelle
      });
}

function updateDisplay() {
    fetch('/status')
        .then(response => response.json())
        .then(data => {
            document.getElementById('tea-info').innerText = data.tea_ready || "Durum ayarlanmadı.";
            document.getElementById('water-info').innerText = data.water_timer || "Durum ayarlanmadı.";
            document.getElementById('tea-packages').innerText = data.tea_stock || "Bilgi yok";
            document.getElementById('tea-times').innerText = data.tea_times || "Bilgi yok";
            document.getElementById('tea-cost-date').innerText = data.tea_money || "Bilgi yok";
        });
}

// Sayfa yüklendiğinde verileri güncelle
window.onload = updateDisplay;
