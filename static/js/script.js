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

// Ek Bilgiler
function updateTeaPackages() {
    const value = document.getElementById('tea-packages').value;
    localStorage.setItem('teaPackages', value);
    alert("Mevcut Çay Paket Sayısı güncellendi!");
}

function updateTeaTimes() {
    const value = document.getElementById('tea-times').value;
    localStorage.setItem('teaTimes', value);
    alert("Muhtemel Çay Saatleri güncellendi!");
}

function updateTeaCostDate() {
    const value = document.getElementById('tea-cost-date').value;
    localStorage.setItem('teaCostDate', value);
    alert("Çay Ücreti ve Tarihi güncellendi!");
}

// Ekranı Güncelle
function updateDisplay() {
    document.getElementById('tea-info').innerText =
        localStorage.getItem('teaStatus') || "Durum ayarlanmadı.";
    document.getElementById('water-info').innerText =
        localStorage.getItem('waterStatus') || "Durum ayarlanmadı.";

    const teaTimerEnd = localStorage.getItem('teaTimerEnd');
    if (teaTimerEnd) {
        const remainingTime = Math.max(0, teaTimerEnd - new Date().getTime());
        const minutesRemaining = Math.floor(remainingTime / 60000);
        document.getElementById('tea-timer').innerText =
            minutesRemaining > 0 ? `Geri sayım: ${minutesRemaining} dakika` : "Çay hazır!";
    }

    const waterTimerEnd = localStorage.getItem('waterTimerEnd');
    if (waterTimerEnd) {
        const remainingTime = Math.max(0, waterTimerEnd - new Date().getTime());
        const minutesRemaining = Math.floor(remainingTime / 60000);
        document.getElementById('water-timer').innerText =
            minutesRemaining > 0 ? `Geri sayım: ${minutesRemaining} dakika` : "Su hazır!";
    }

    document.getElementById('tea-packages-info').innerText =
        localStorage.getItem('teaPackages') || "Bilgi yok";
    document.getElementById('tea-times-info').innerText =
        localStorage.getItem('teaTimes') || "Bilgi yok";
    document.getElementById('tea-cost-date-info').innerText =
        localStorage.getItem('teaCostDate') || "Bilgi yok";
}

function updateTimers() {
    const teaTimerEnd = localStorage.getItem('teaTimerEnd');
    if (teaTimerEnd && new Date().getTime() > teaTimerEnd) {
        setTeaStatus("Çay hazır", 0); 
    }

    const waterTimerEnd = localStorage.getItem('waterTimerEnd');
    if (waterTimerEnd && new Date().getTime() > waterTimerEnd) {
        setWaterStatus("Su hazır", 0); 
    }

    updateDisplay();
}

window.onload = function() {
    updateDisplay();
    setInterval(updateTimers, 1000);
};
