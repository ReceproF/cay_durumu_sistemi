window.onload = function() {
    fetch('/api/get_data')
        .then(response => response.json())
        .then(data => {
            document.getElementById("tea-info").innerText = data.tea_status;
            document.getElementById("water-info").innerText = data.water_status;
            document.getElementById("tea-packages").innerText = data.tea_packages;
            document.getElementById("tea-times").innerText = data.tea_times;
            document.getElementById("tea-cost-date").innerText = data.tea_cost_date;
        })
        .catch(error => console.error("Veri alınamadı:", error));
};
