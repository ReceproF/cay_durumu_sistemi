// Admin Paneli Çay Durumu Güncelleme
function updateTeaStatus() {
    const status = document.getElementById('tea-status').value;
    const timer = document.getElementById('tea-timer').value;
    setTeaStatus(status, timer);
}

// Admin Paneli Su Durumu Güncelleme
function updateWaterStatus() {
    const status = document.getElementById('water-status').value;
    const timer = document.getElementById('water-timer').value;
    setWaterStatus(status, timer);
}

// Admin Paneli Ek Bilgileri Güncelleme
function updateAllInfo() {
    updateTeaPackages();
    updateTeaTimes();
    updateTeaCostDate();
}
