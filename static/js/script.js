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
    // Çay ve su bilgilerini göster
    document.getElementById('tea-info').innerText =
        localStorage.getItem('teaStatus') || "Durum ayarlanmadı.";
    document.getElementById('water-info').innerText =
        localStorage.getItem('waterStatus') || "Durum ayarlanmadı.";

    // Ek bilgiler
    document.getElementById('tea-packages').innerText =
        localStorage.getItem('teaPackages') || "Bilgi yok";
    document.getElementById('tea-times').innerText =
        localStorage
