// Çay Durumu Ayarla
function setTeaStatus(status) {
    localStorage.setItem('teaStatus', status);
    alert("Çay durumu güncellendi: " + status);
}

// Su Durumu Ayarla
function setWaterStatus(status) {
    localStorage.setItem('waterStatus', status);
    alert("Su durumu güncellendi: " + status);
}

// Kullanıcı Sayfası İçin Durumları Yükle
if (document.getElementById('tea-info')) {
    const teaStatus = localStorage.getItem('teaStatus') || "Durum ayarlanmadı.";
    document.getElementById('tea-info').innerText = teaStatus;
}

if (document.getElementById('water-info')) {
    const waterStatus = localStorage.getItem('waterStatus') || "Durum ayarlanmadı.";
    document.getElementById('water-info').innerText = waterStatus;
}
