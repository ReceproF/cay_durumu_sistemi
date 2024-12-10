// Çay Durumu ve Sayaç
function setTeaStatus(status, timer = 0) {
    localStorage.setItem('teaStatus', status);
    localStorage.setItem('teaTimer', timer);
    alert("Çay durumu güncellendi: " + status);
    updateDisplay();
}

function setTeaTimer(minutes) {
    const endTime = new Date().getTime() + minutes * 60000;
    localStorage.setItem('teaTimerEnd', endTime);
    alert("Çay için geri sayım başladı: " + minutes + " dakika.");
}

// Su Durumu ve Sayaç
function setWaterStatus(status, timer = 0) {
    localStorage.setItem('waterStatus', status);
    localStorage.setItem('waterTimer', timer);
    alert("Su durumu güncellendi: " + status);
    updateDisplay();
}

function setWaterTimer(minutes) {
    const endTime = new Date().getTime() + minutes * 60000;
    localStorage.setItem('waterTimerEnd', endTime);
    alert("Su için geri sayım başladı: " + minutes + " dakika.");
}

// Geri Sayım
function updateTimers() {
    const now = new Date().getTime();

    const teaTimerEnd = localStorage.getItem('teaTimerEnd');
    if (teaTimerEnd) {
        const teaRemaining = Math.max(0, Math.ceil((teaTimerEnd - now) / 60000));
        document.getElementById('tea-timer').innerText =
            teaRemaining > 0 ? `Çayın olmasına ${teaRemaining} dakika kaldı.` : '';
    }

    const waterTimerEnd = localStorage.getItem('waterTimerEnd');
    if (waterTimerEnd) {
        const waterRemaining = Math.max(0, Math.ceil((waterTimerEnd - now) / 60000));
        document.getElementById('water-timer').innerText =
            waterRemaining > 0 ? `Suyun kaynamasına ${waterRemaining} dakika kaldı.` : '';
    }

    setTimeout(updateTimers, 1000);
}

// Durumları ve Renkleri Güncelle
function updateDisplay() {
    const teaStatus = localStorage.getItem('teaStatus') || "Durum ayarlanmadı.";
    const waterStatus = localStorage.getItem('waterStatus') || "Durum ayarlanmadı.";

    const teaBox = document.getElementById('tea-status');
    const waterBox = document.getElementById('water-status');

    document.getElementById('tea-info').innerText = teaStatus;
    document.getElementById('water-info').innerText = waterStatus;

    teaBox.className = `status-box ${teaStatus.includes('Hazır') ? 'green' : 'red'}`;
    waterBox.className = `status-box ${waterStatus.includes('Hazır') ? 'green' : 'red'}`;
}

// İlk Yükleme
document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
    updateTimers();
});
