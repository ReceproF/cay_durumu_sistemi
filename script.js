// Yönetim fonksiyonları
function setTeaStatus(status) {
    localStorage.setItem('teaStatus', status);
    alert('Çay durumu güncellendi!');
}

function setTeaCountdown(minutes) {
    const countdownTime = new Date().getTime() + minutes * 60000;
    localStorage.setItem('teaCountdown', countdownTime);
    alert('Çay geri sayımı başlatıldı!');
}

function setWaterStatus(status) {
    localStorage.setItem('waterStatus', status);
    alert('Su durumu güncellendi!');
}

function setWaterCountdown(minutes) {
    const countdownTime = new Date().getTime() + minutes * 60000;
    localStorage.setItem('waterCountdown', countdownTime);
    alert('Su geri sayımı başlatıldı!');
}

// Kullanıcı sayfası fonksiyonları
function updateStatuses() {
    const teaStatus = localStorage.getItem('teaStatus') || 'Bilinmiyor';
    const waterStatus = localStorage.getItem('waterStatus') || 'Bilinmiyor';

    const teaMessage = document.getElementById('tea-message');
    const waterMessage = document.getElementById('water-message');

    teaMessage.textContent = teaStatus;
    waterMessage.textContent = waterStatus;

    // Geri sayım
    const teaCountdown = localStorage.getItem('teaCountdown');
    if (teaCountdown) {
        const remainingTime = Math.max(0, Math.ceil((teaCountdown - new Date().getTime()) / 60000));
        teaMessage.textContent += ` (Çayın olmasına ${remainingTime} dakika kaldı.)`;
    }

    const waterCountdown = localStorage.getItem('waterCountdown');
    if (waterCountdown) {
        const remainingTime = Math.max(0, Math.ceil((waterCountdown - new Date().getTime()) / 60000));
        waterMessage.textContent += ` (Suyun kaynamasına ${remainingTime} dakika kaldı.)`;
    }

    // Renkler
    document.getElementById('tea-status').className = `status-box ${teaStatus.includes('Hazır') ? 'green' : 'red'}`;
    document.getElementById('water-status').className = `status-box ${waterStatus.includes('Hazır') ? 'green' : 'red'}`;
}

// Sayfa yüklendiğinde durumları güncelle
if (document.getElementById('tea-status')) {
    setInterval(updateStatuses, 1000);
}
