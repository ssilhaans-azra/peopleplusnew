const activityHTML = `
    <div class="bg-white p-6 rounded-xl overflow-x-auto shadow-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Today's Attendance Records</h2>
        <table class="min-w-full table-auto">
            <thead class="bg-[#FFFFFF]">
                <tr>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Employee</th>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Department</th>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Check-In</th>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Check-Out</th>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Work Hours</th>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Method</th>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Location</th>
                    <th class="px-4 py-4 text-[14px] text-gray-700 font-bold">Status</th>
                </tr>
            </thead>
            <tbody>
                <!-- Row 1 -->
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-4 text-sm text-gray-800 flex items-center justify-start gap-2">
                        <p class="w-10 h-10 flex items-center justify-center text-white bg-gradient-to-r from-[#C27AFF] to-[#FB64B6] rounded-full">
                            JD
                        </p>
                        <p class="ml-2">John Doe</p>
                    </td>
                    <td class="pl-6 py-4 text-sm text-gray-600">Engineering</td>
                    <td class="pl-6 py-4 text-sm text-gray-700">08:45 AM</td>
                    <td class="pl-6 py-4 text-sm text-gray-700">05:30 PM</td>
                    <td class="pl-6 py-4 text-sm text-gray-700">8h 45m</td>
                    <td class="px-4 py-4 text-sm text-gray-700 flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#9E005D]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-qr-code-icon lucide-qr-code"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                        <span class="p-1 text-[14px]">QR</span>
                    </td>
                    <td class="pl-6 py-4 text-sm text-gray-700">Office</td>
                    <td class="pl-6 pr-3 py-4 text-sm text-gray-700 flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#008236]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                        <span class="text-[#008236] text-[12px] font-normal">Present</span>
                    </td>
                </tr>
                <!-- Row 2 -->
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-sm text-gray-800 flex items-center justify-start gap-2">
                        <p class="p-2 rounded-full text-white bg-gradient-to-r from-[#C27AFF] to-[#FB64B6]">
                            JS
                        </p>
                        <p class="ml-2">Jane Smith</p>
                    </td>
                    <td class="pl-6 py-2 text-sm text-gray-600">Marketing</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">09:00 AM</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">06:00 PM</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">9h 00m</td>
                    <td class="px-4 py-2 text-sm text-gray-700 flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#9E005D]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-nfc-icon lucide-nfc"><path d="M6 8.32a7.43 7.43 0 0 1 0 7.36"/><path d="M9.46 6.21a11.76 11.76 0 0 1 0 11.58"/><path d="M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"/><path d="M16.37 2a20.16 20.16 0 0 1 0 20"/></svg>
                        <span class="p-1 text-[14px]">NFC</span>
                    </td>
                    <td class="pl-6 py-2 text-sm text-gray-700">Office</td>
                    <td class="pl-6 pr-3 py-4 text-sm text-gray-700 flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#008236]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                        <span class="text-[#008236] text-[12px] font-normal">Present</span>
                    </td>
                </tr>
                <!-- Row 3 -->
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-sm text-gray-800 flex items-center justify-start gap-2">
                        <p class="p-2 rounded-full text-white bg-gradient-to-r from-[#C27AFF] to-[#FB64B6]">
                            MJ
                        </p>
                        <p class="ml-2">Mike Johnson</p>
                    </td>
                    <td class="pl-6 py-2 text-sm text-gray-600">Sales</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">08:30 AM</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">05:00 PM</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">8h 30m</td>
                    <td class="px-4 py-2 text-sm text-gray-700 flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#9E005D]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-qr-code-icon lucide-qr-code"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg>
                        <span class="p-1 text-[14px]">QR</span>
                    </td>
                    <td class="pl-6 py-2 text-sm text-gray-700">Remote</td>
                    <td class="pl-6 pr-3 py-4 text-sm text-gray-700 flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#008236]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                        <span class="text-[#008236] text-[12px] font-normal">Present</span>
                    </td>
                    </td>
                </tr>
                <!-- Row 4 -->
                <tr class="border-t border-gray-300">
                    <td class="px-4 py-2 text-sm text-gray-800 flex items-center justify-start gap-2">
                        <p class="p-2 rounded-full text-white bg-gradient-to-r from-[#C27AFF] to-[#FB64B6]">
                            SW
                        </p>
                        <p class="ml-2">Sarah Williams</p>
                    </td>
                    <td class="pl-6 py-2 text-sm text-gray-600">HR</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">09:15 AM</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">05:45 PM</td>
                    <td class="pl-6 py-2 text-sm text-gray-700">8h 30m</td>
                    <td class="pl-10 py-2 text-sm text-gray-700 flex justify-center items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#9E005D]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                          <span class="p-1 text-[14px]">Geolocation</span>
                    </td>
                    <td class="pl-6 py-2 text-sm text-gray-700">Office</td>
                    <td class="pl-6 pr-3 py-4 text-sm text-gray-700 flex justify-center items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-[#008236]" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-big-icon lucide-circle-check-big"><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                        <span class="text-[#008236] text-[12px] font-normal">Present</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
`;

document.getElementById('attendanceRecordsContainer').innerHTML = activityHTML;
