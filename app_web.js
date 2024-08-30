// Fetch the CSV file and process it
async function fetchData() {
    const response = await fetch('dump.csv');
    const data = await response.text();
    const rows = data.split('\n').slice(1);  // Skip header

    let companyList = [];
    rows.forEach(row => {
        const cols = row.split(',');
        const companyName = cols[0];  // Assuming first column is company name
        if (!companyList.includes(companyName)) {
            companyList.push(companyName);
            document.getElementById('company-list').innerHTML += `<li class="list-group-item" onclick="displayChart('${companyName}')">${companyName}</li>`;
        }
    });

    return rows;  // Return for chart usage
}

let csvData = [];

fetchData().then(data => {
    csvData = data;  // Store data for later use
});

// Display the chart based on selected company
function displayChart(companyName) {
    const filteredData = csvData.filter(row => row.startsWith(companyName));
    const labels = filteredData.map(row => row.split(',')[1]);  // Assuming 2nd column contains labels
    const dataPoints = filteredData.map(row => row.split(',')[2]);  // Assuming 3rd column contains values

    const ctx = document.getElementById('companyChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: companyName,
                data: dataPoints,
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
