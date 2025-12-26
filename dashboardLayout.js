const Sidebar = () => {
  return `
    <div class="sidebar">
      <div class="sidebar-header">
        <h2>People Plus</h2>
        <p>Admin</p>
      </div>
      <ul class="sidebar-menu">
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Attendance</a></li>
        <li><a href="#">Employees</a></li>
        <li><a href="#">Shift Scheduling</a></li>
        <li><a href="#">Leave Management</a></li>
        <li><a href="#">NOC & Payroll</a></li>
        <li><a href="#">Announcements</a></li>
        <li><a href="#">Data Export</a></li>
        <li><a href="#">Billing</a></li>
      </ul>
      <div class="sidebar-footer">
        <img scr='./images/user.png'/>
      </div>
      <div class="sidebar-footer">
        <button class="sign-out">Sign out</button>
      </div>
    </div>
  `;
};

export default Sidebar;
