function createAttendanceChart() {
  const ctx = document.getElementById('attendanceChart').getContext('2d');
  
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Attendance',
        data: [42, 45, 44, 46, 43, 38, 35],
        borderColor: '#10B981',
        backgroundColor: 'rgba(158, 0, 93, 0.1)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: '#10B981',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Weekly Attendance',
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
          max: 50,
          grid: {
            color: 'rgba(0, 0, 0, 0.05)'
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