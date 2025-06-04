    <template>
        <div class="tw-space-y-6">
        <div class="tw-flex tw-justify-start tw-items-start tw-gap-2">
            <button class="tw-flex tw-items-center tw-gap-4 tw-bg-white tw-border tw-border-gray-300 tw-text-gray-700 tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-gray-50">
            <svg class="tw-w-4 tw-h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
            </svg>
            Фильтровать по
            </button>
            <div class="tw-flex tw-items-center tw-gap-4">
            <button class="tw-bg-[#3D3BFB] tw-text-white tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-[#2f2cf1]">
                + Добавить пользователя
            </button>
            <input type="text" placeholder="Поиск" class="tw-border tw-border-gray-300 tw-rounded-lg tw-px-3 tw-py-2 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-[#3D3BFB] tw-ml-5" />
            </div>
        </div>
    
        <div class="tw-bg-white tw-rounded-lg tw-shadow-sm">
            <table class="tw-w-full tw-text-left tw-text-sm">
            <thead class="tw-bg-gray-50">
                <tr>
                <th class="tw-p-4">
                    <input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" />
                </th>
                <th class="tw-p-4">Пользователь</th>
                <th class="tw-p-4">Статус</th>
                <th class="tw-p-4">Статус действия</th>
                <th class="tw-p-4">Статус заявки</th>
                <th class="tw-p-4">Роль</th>
                <th class="tw-p-4">Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr class="tw-border-b">
                <td class="tw-p-4">
                    <input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" />
                </td>
                <td class="tw-p-4 tw-flex tw-items-center tw-gap-2">
                    <img src="https://i.pravatar.cc/32" class="tw-w-8 tw-h-8 tw-rounded-full" />
                    <div>
                    <div class="tw-font-medium">SmartMonitor</div>
                    <div class="tw-text-gray-500">smartHSE@gmail.com</div>
                    </div>
                </td>
                <td class="tw-p-4 tw-text-green-600">Активен</td>
                <td class="tw-p-4 tw-text-green-600">Онлайн</td>
                <td class="tw-p-4 tw-text-green-600">Одобрен</td>
                <td class="tw-p-4">Венчурная компания</td>
                <td class="tw-p-4 tw-flex tw-gap-2">
                    <button>
                    <svg class="tw-w-4 tw-h-4 tw-text-gray-500 hover:tw-text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    <button>
                    <svg class="tw-w-4 tw-h-4 tw-text-gray-500 hover:tw-text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                </td>
                </tr>
    
                <!-- Пользователь 2 -->
                <tr class="tw-border-b">
                <td class="tw-p-4">
                    <input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" />
                </td>
                <td class="tw-p-4 tw-flex tw-items-center tw-gap-2">
                    <img src="https://i.pravatar.cc/32?img=2" class="tw-w-8 tw-h-8 tw-rounded-full" />
                    <div>
                    <div class="tw-font-medium">MongolStartup</div>
                    <div class="tw-text-gray-500">mongols@gmail.com</div>
                    </div>
                </td>
                <td class="tw-p-4 tw-text-orange-500">Не активен</td>
                <td class="tw-p-4 tw-text-orange-500">Офлайн</td>
                <td class="tw-p-4 tw-text-orange-500">Не одобрен</td>
                <td class="tw-p-4">Бизнес-ангел</td>
                <td class="tw-p-4 tw-flex tw-gap-2">
                    <button>
                    <svg class="tw-w-4 tw-h-4 tw-text-gray-500 hover:tw-text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    </button>
                    <button>
                    <svg class="tw-w-4 tw-h-4 tw-text-gray-500 hover:tw-text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    
        <div class="tw-flex tw-justify-between tw-items-center">
            <button class="tw-px-4 tw-py-2 tw-border tw-rounded-lg">Previous</button>
            <span>Page 1 of 10</span>
            <button class="tw-px-4 tw-py-2 tw-border tw-rounded-lg">Next</button>
        </div>
        </div>
    </template>
    
    <script setup>
    </script>