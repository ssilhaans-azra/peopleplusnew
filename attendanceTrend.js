import Chart from 'chart.js/auto';

const createAttendanceChart = (canvasId) => {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Attendance Trend (%)',
        data: [90, 95, 85, 80, 88, 92],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};

export default createAttendanceChart;