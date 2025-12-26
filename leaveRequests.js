import Chart from 'chart.js/auto';

const createLeaveRequestsChart = (canvasId) => {
  const ctx = document.getElementById(canvasId).getContext('2d');
  const chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Approved', 'Pending', 'Rejected'],
      datasets: [{
        label: 'Leave Requests',
        data: [45, 12, 3],
        backgroundColor: ['green', 'orange', 'red'],
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};

export default createLeaveRequestsChart;