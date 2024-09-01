document.addEventListener("DOMContentLoaded", function () {
    const companiesList = document.getElementById('companies');
    const chartContext = document.getElementById('companyChart').getContext('2d');
    let companyData = [];

    // Initialize an empty chart
    let companyChart = new Chart(chartContext, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Metrics',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
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

    // Load CSV data from the GitHub link
    Papa.parse('https://raw.githubusercontent.com/shaktids/stock_app_test/main/dump.csv', {
        download: true,
        header: true,
        complete: function(results) {
            companyData = results.data;
            populateCompaniesList(companyData);
        }
    });

    // Populate company names in the sidebar list
    function populateCompaniesList(data) {
        data.forEach((company) => {
            const companyItem = document.createElement('li');
            companyItem.classList.add('list-group-item', 'cursor-pointer');
            companyItem.textContent = company.Company;
            companyItem.addEventListener('click', () => displayChartData(company));
            companiesList.appendChild(companyItem);
        });
    }

    // Display chart data for the selected company
    function displayChartData(company) {
        const labels = ['Metric1', 'Metric2', 'Metric3', 'Metric4'];
        const data = [
            company.Metric1,
            company.Metric2,
            company.Metric3,
            company.Metric4
        ].map(Number);  // Convert strings to numbers

        // Update chart data and labels
        companyChart.data.labels = labels;
        companyChart.data.datasets[0].data = data;
        companyChart.update();
    }
});
