function renderSidebar() {
  const sidebarHTML = `
    <div id="sidebarContent" class="fixed lg:relative w-64 bg-white/70 h-full backdrop-blur-sm shadow-lg p-6 md:p-4 flex flex-col z-50 -left-64 lg:left-0 transition-all duration-300 overflow-y-auto">
      <div id="sidebarHeader" class="sidebar-header flex justify-center gap-2 items-center mb-4 border-b border-white/80 pb-4">
        <div id="sidebarHeader" class="sidebar-header flex justify-center gap-2 items-center">
            <img class="w-10 h-10 rounded-md sidebar-logo" src="images/logo.png" alt="Logo" />
            <h2 class="text-xl lg:text-[16px] font-normal text-[#9E005D] sidebar-logo-text">People Plus</h2>
        </div>
        <button id="sidebarToggle" class="hidden lg:block p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" x2="21" y1="6" y2="6"/>
            <line x1="3" x2="21" y1="12" y2="12"/>
            <line x1="3" x2="21" y1="18" y2="18"/>
          </svg>
        </button>
        <button id="sidebarClose" class="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" x2="6" y1="6" y2="18"/>
            <line x1="6" x2="18" y1="6" y2="18"/>
          </svg>
        </button>
      </div>
      
      <!-- Removed overflow-y-auto from here -->
      <ul class="space-y-1 lg:space-y-1">
        <li>
          <a href="dashboard.html" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg bg-[#F3E8FF] text-[#9E005D] font-medium transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="7" height="9" x="3" y="3" rx="1"/>
              <rect width="7" height="5" x="14" y="3" rx="1"/>
              <rect width="7" height="9" x="14" y="12" rx="1"/>
              <rect width="7" height="5" x="3" y="16" rx="1"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="attendandeDashboard.html" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
              <path d="m9 14 2 2 4-4"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Attendance</span>
          </a>
        </li>
        <li>
          <a href="employeeManageDashboard.html" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Employees</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/>
              <path d="M3 10h18"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Shift Scheduling</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              <rect width="20" height="14" x="2" y="6" rx="2"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Leave Management</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1-2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/>
              <path d="M14 2v5a1 1 0 0 0 1 1h5"/>
              <path d="M10 9H8"/><path d="M16 13H8"/>
              <path d="M16 17H8"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">NOC & Payroll</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10.268 21a2 2 0 0 0 3.464 0"/>
              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Announcements</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" x2="12" y1="15" y2="3"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Data Export</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="20" height="14" x="2" y="5" rx="2"/>
              <line x1="2" x2="22" y1="10" y2="10"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Billing</span>
          </a>
        </li>
      </ul>

            
      <div class="mt-auto mb-16 pt-4 lg:pt-8">
          <button class="w-full p-2 lg:p-3 bg-[#9E005D] text-white rounded-lg hover:bg-[#8c0052] font-medium transition-colors flex items-center justify-center gap-2">
          <span class="sidebar-text text-sm lg:text-[16px]">My Employee Portal</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-round-pen-icon lucide-user-round-pen"><path d="M2 21a8 8 0 0 1 10.821-7.487"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="8" r="5"/></svg>
          </button>
      </div>
    
        <div class="flex bg-white rounded-xl mt-auto p-4 lg:p-4 items-center justify-center gap-4 user-div">
          <img class="w-[71px] h-[54px] rounded-xl user-img" src="images/user.png" alt="user" />
          <div class="user-info">
            <h2 class="font-medium text-[18px] text-[#333333]">User Name</h2>
            <p class="font-normal text-[12px] text-[#6C6C6C]">User Role</p>
          </div>
        </div>
      <div class="mt-auto pt-4 lg:pt-8">
        <button class="w-full p-2 lg:p-3 bg-[#9E005D] text-white rounded-full hover:bg-[#8c0052] font-medium transition-colors flex items-center justify-center gap-2">
          <span class="sidebar-text text-sm lg:text-[16px]">Sign out</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" x2="9" y1="12" y2="12"/>
          </svg>
        </button>
      </div>
    </div>
  `;
  
  document.getElementById('sidebar').innerHTML = sidebarHTML;

  const sidebarContent = document.getElementById('sidebarContent');
  const sidebarClose = document.getElementById('sidebarClose');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  sidebarClose.addEventListener('click', function() {
    sidebarContent.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });

  mobileMenuBtn.addEventListener('click', function() {
    sidebarContent.classList.add('active');
    sidebarOverlay.classList.add('active');
  });

  sidebarOverlay.addEventListener('click', function() {
    sidebarContent.classList.remove('active');
    sidebarOverlay.classList.remove('active');
  });

  const sidebarToggle = document.getElementById('sidebarToggle');
  sidebarToggle.addEventListener('click', function() {
    sidebarContent.classList.toggle('sidebar-minimized');
    if (sidebarContent.classList.contains('sidebar-minimized')) {
      sidebarContent.style.width = '80px';
      document.querySelector('.user-info').classList.add('hidden');
      document.querySelector('.sidebar-logo').classList.add('hidden');
      document.querySelector('.sidebar-logo-text').classList.add('hidden');
      document.querySelector('.user-img').classList.add('w-[60px]', 'h-[35px]');
      document.querySelector('.user-div').classList.add('bg-transparent');
    } else {
      sidebarContent.style.width = '16rem';
      document.querySelector('.user-info').classList.remove('hidden');
      document.querySelector('.sidebar-logo').classList.remove('hidden');
      document.querySelector('.sidebar-logo-text').classList.remove('hidden');
      document.querySelector('.user-img').classList.remove('w-[60px]', 'h-[35px]');
      document.querySelector('.user-div').classList.remove('bg-transparent');
    }
  });
}