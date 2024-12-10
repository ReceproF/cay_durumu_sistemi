document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const teaStatus = document.getElementById("teaStatus").value;
    const waterStatus = document.getElementById("waterStatus").value;
    const teaPackages = document.getElementById("teaPackages").value;
    const teaTimes = document.getElementById("teaTimes").value;
    const teaCostDate = document.getElementById("teaCostDate").value;

    const data = {
        tea_status: teaStatus,
        water_status: waterStatus,
        tea_packages: teaPackages,
        tea_times: teaTimes,
        tea_cost_date: teaCostDate
    };

    fetch('/api/update_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error("Hata:", error);
    });
});
