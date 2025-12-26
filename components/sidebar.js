function renderSidebar() {
  const sidebarHTML = `
    <div id="sidebarContent" class="fixed lg:relative w-64 bg-white/90 h-[900px] backdrop-blur-sm shadow-lg p-4 flex flex-col h-screen z-50 -left-64 lg:left-0 transition-all duration-300 overflow-hidden">
      <div class="flex items-center justify-between mb-6 lg:mb-8">
        <div id="sidebarHeader" class="sidebar-header flex justify-center gap-2 items-center">
            <img class="w-10 h-10 rounded-md" src="images/logo.png" alt="Logo" />
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
      
      <ul class="space-y-1 lg:space-y-2 flex-grow overflow-y-auto">
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg bg-[#F3E8FF] text-[#9E005D] font-medium transition-colors">
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
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Attendance</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <line x1="19" x2="19" y1="8" y2="14"/>
              <line x1="22" x2="16" y1="11" y2="11"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Employees</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Shift Scheduling</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">Leave Management</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" x2="12" y1="2" y2="22"/>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span class="sidebar-text text-sm lg:text-[16px]">NOC & Payroll</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center gap-3 p-2 lg:p-3 rounded-lg hover:bg-gray-100 text-gray-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
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

      
      
        <div class="mt-auto mb-4 pt-4 lg:pt-8">
            <button class="w-full p-2 lg:p-3 bg-[#9E005D] text-white rounded-lg hover:bg-[#8c0052] font-medium transition-colors flex items-center justify-center gap-2">
            <span class="sidebar-text text-sm lg:text-[16px]">My Employee Portal</span>
            </button>
        </div>
    
        <div class="flex bg-white rounded-xl mt-auto p-4 lg:p-4 items-center justify-center gap-4">
            <img class="w-[71px] h-[54px] rounded-xl" src="images/user.png" alt="user" />
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
      sidebarContent.style.width = '80px'; // Minimized width
      // Hide user info when sidebar is minimized
      document.querySelector('.user-info').classList.add('hidden');
      document.querySelector('.sidebar-logo-text').classList.add('hidden'); // Hide company name
    } else {
      sidebarContent.style.width = '16rem'; // Expanded width
      document.querySelector('.user-info').classList.remove('hidden');
      document.querySelector('.sidebar-logo-text').classList.remove('hidden'); // Show company name
    }
  });
}