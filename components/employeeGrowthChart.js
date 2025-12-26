function createEmployeeGrowthChart() {
  const ctx = document.getElementById('employeeGrowthChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Employees',
        data: [35, 38, 40, 42, 45, 48],
        backgroundColor: '#8B5CF6',
        borderRadius: 6,
        barThickness: 30,
        hoverBackgroundColor: '#6222f5'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Employee Growth',
          font: { 
            size: 16, 
            weight: 'bold' 
          },
          color: '#374151'
        },
        legend: { 
          display: false 
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: 12,
          borderRadius: 8
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
          },
          ticks: {
            stepSize: 10
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}