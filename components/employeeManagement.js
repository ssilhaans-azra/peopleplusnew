const activityHTML = `
    <div class="bg-white p-6 rounded-xl overflow-x-auto shadow-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Employee Management</h2>
        <table class="min-w-full table-auto">
            <thead class="bg-[#FFFFFF]">
                <tr>
                    <th class="px-4 py-4 text-left text-[14px] text-gray-700 font-bold">Name</th>
                    <th class="px-4 py-4 text-left text-[14px] text-gray-700 font-bold">Contact</th>
                    <th class="px-4 py-4 text-left text-[14px] text-gray-700 font-bold">Department</th>
                    <th class="px-4 py-4 text-left text-[14px] text-gray-700 font-bold">Position</th>
                    <th class="px-4 py-4 text-left text-[14px] text-gray-700 font-bold">Join Date</th>
                    <th class="px-4 py-4 text-left text-[14px] text-gray-700 font-bold">Status</th>
                    <th class="px-4 py-4 text-left text-[14px] text-gray-700 font-bold">Actions</th>
                </tr>
            </thead>
            <tbody>
                <!-- Row 1 -->
                <tr class="border-t border-gray-200 hover:bg-gray-50">
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-r from-[#C27AFF] to-[#FB64B6] rounded-full">
                                JD
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-800">John</p>
                                <p class="text-sm font-medium text-gray-800">Doe</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span>john.doe@company.com</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-[#9E005D] font-medium">Engineering</td>
                    <td class="px-4 py-4 text-sm text-gray-600">Manager</td>
                    <td class="px-4 py-4 text-sm text-gray-600">2024-<br/>01-15</td>
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                                <path d="m9 11 3 3L22 4"/>
                            </svg>
                            <span class="text-sm text-green-600 font-medium">Active</span>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <button class="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="12" cy="5" r="1"/>
                                <circle cx="12" cy="19" r="1"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Row 2 -->
                <tr class="border-t border-gray-200 hover:bg-gray-50">
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-r from-[#C27AFF] to-[#FB64B6] rounded-full">
                                JD
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-800">John</p>
                                <p class="text-sm font-medium text-gray-800">Doe</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span>john.doe@company.com</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-[#9E005D] font-medium">Engineering</td>
                    <td class="px-4 py-4 text-sm text-gray-600">Manager</td>
                    <td class="px-4 py-4 text-sm text-gray-600">2024-<br/>01-15</td>
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                                <path d="m9 11 3 3L22 4"/>
                            </svg>
                            <span class="text-sm text-green-600 font-medium">Active</span>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <button class="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="12" cy="5" r="1"/>
                                <circle cx="12" cy="19" r="1"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Row 3 -->
                <tr class="border-t border-gray-200 hover:bg-gray-50">
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-r from-[#C27AFF] to-[#FB64B6] rounded-full">
                                JD
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-800">John</p>
                                <p class="text-sm font-medium text-gray-800">Doe</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span>john.doe@company.com</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-[#9E005D] font-medium">Engineering</td>
                    <td class="px-4 py-4 text-sm text-gray-600">Manager</td>
                    <td class="px-4 py-4 text-sm text-gray-600">2024-<br/>01-15</td>
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                                <path d="m9 11 3 3L22 4"/>
                            </svg>
                            <span class="text-sm text-green-600 font-medium">Active</span>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <button class="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="12" cy="5" r="1"/>
                                <circle cx="12" cy="19" r="1"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Row 4 -->
                <tr class="border-t border-gray-200 hover:bg-gray-50">
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-r from-[#C27AFF] to-[#FB64B6] rounded-full">
                                JD
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-800">John</p>
                                <p class="text-sm font-medium text-gray-800">Doe</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span>john.doe@company.com</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-[#9E005D] font-medium">Engineering</td>
                    <td class="px-4 py-4 text-sm text-gray-600">Manager</td>
                    <td class="px-4 py-4 text-sm text-gray-600">2024-<br/>01-15</td>
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                                <path d="m9 11 3 3L22 4"/>
                            </svg>
                            <span class="text-sm text-green-600 font-medium">Active</span>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <button class="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="12" cy="5" r="1"/>
                                <circle cx="12" cy="19" r="1"/>
                            </svg>
                        </button>
                    </td>
                </tr>
                <!-- Row 5 -->
                <tr class="border-t border-gray-200 hover:bg-gray-50">
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-3">
                            <div class="w-10 h-10 flex items-center justify-center text-white text-sm font-semibold bg-gradient-to-r from-[#C27AFF] to-[#FB64B6] rounded-full">
                                JD
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-800">John</p>
                                <p class="text-sm font-medium text-gray-800">Doe</p>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span>john.doe@company.com</span>
                            </div>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </td>
                    <td class="px-4 py-4 text-sm text-[#9E005D] font-medium">Engineering</td>
                    <td class="px-4 py-4 text-sm text-gray-600">Manager</td>
                    <td class="px-4 py-4 text-sm text-gray-600">2024-<br/>01-15</td>
                    <td class="px-4 py-4">
                        <div class="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335"/>
                                <path d="m9 11 3 3L22 4"/>
                            </svg>
                            <span class="text-sm text-green-600 font-medium">Active</span>
                        </div>
                    </td>
                    <td class="px-4 py-4">
                        <button class="text-gray-600 hover:text-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="1"/>
                                <circle cx="12" cy="5" r="1"/>
                                <circle cx="12" cy="19" r="1"/>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
`;

document.getElementById('employeeManagementsContainer').innerHTML = activityHTML;