function renderRecentActivity() {
  const activities = [
    { 
      color: '#10B981', 
      text: 'John Doe checked in at 9:00 AM', 
      type: 'attendance',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
    },
    { 
      color: '#3B82F6', 
      text: 'Leave request approved for Jane Smith', 
      type: 'leave',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>`
    },
    { 
      color: '#F59E0B', 
      text: 'New employee onboarded: Mike Johnson', 
      type: 'employee',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>`
    },
    { 
      color: '#10B981', 
      text: 'Sarah Williams clocked out at 5:30 PM', 
      type: 'attendance',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`
    },
    { 
      color: '#3B82F6', 
      text: 'Medical leave submitted by Tom Brown', 
      type: 'leave',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`
    },
    { 
      color: '#F59E0B', 
      text: 'Profile updated for Emma Davis', 
      type: 'employee',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>`
    },
    { 
      color: '#8B5CF6', 
      text: 'Shift schedule updated for next week', 
      type: 'shift',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>`
    },
    { 
      color: '#EF4444', 
      text: 'Payroll processing completed', 
      type: 'payroll',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`
    },
    { 
      color: '#EF4444', 
      text: 'Monthly salary disbursed successfully', 
      type: 'payroll',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4Z"/></svg>`
    }
  ];

  const activityHTML = `
    <div class="bg-white backdrop-blur-sm p-6 rounded-xl shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-gray-800">Recent Activity</h2>
        <div class="relative">
          <select id="activityFilter" class="appearance-none bg-[#F3F4F6] border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:border-[#9E005D] focus:ring-2 focus:ring-[#9E005D]/20 cursor-pointer transition-all">
            <option value="all">All Activities</option>
            <option value="attendance">Attendance</option>
            <option value="leave">Leave</option>
            <option value="employee">Employee</option>
            <option value="shift">Shift</option>
            <option value="payroll">Payroll</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>
      <div id="activityList" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${activities.map(activity => `
          <div class="activity-item flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors" data-type="${activity.type}">
            <div class="flex-shrink-0 p-2 rounded-lg" style="background-color: ${activity.color}20;">
              <div style="color: ${activity.color}">
                ${activity.icon}
              </div>
            </div>
            <span class="text-sm text-gray-700">${activity.text}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.getElementById('recentActivity').innerHTML = activityHTML;
  
  // Add filter functionality
  document.getElementById('activityFilter').addEventListener('change', function(e) {
    const filterValue = e.target.value;
    const activityItems = document.querySelectorAll('.activity-item');
    
    activityItems.forEach(item => {
      if (filterValue === 'all' || item.dataset.type === filterValue) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });
}