<template>
    <div class="tw-space-y-6">
        <div class="tw-flex tw-justify-start tw-items-center tw-gap-4 tw-mb-6">
            <h2 class="tw-text-xl tw-font-bold">Фильтровать по</h2>
            <button class="tw-bg-[#36CE9F] tw-text-white tw-px-4 tw-py-2 tw-rounded-lg">
            + Добавить пользователя
            </button>
        </div>

    <div class="tw-flex tw-flex-wrap tw-gap-2 tw-mb-6">
        <button 
            v-for="filter in filters"
            :key="filter"
            class="tw-bg-gray-100 tw-px-4 tw-py-2 tw-rounded-lg hover:tw-bg-gray-200"
        >
        {{ filter }}
        </button>
    </div>

    <div class="tw-space-y-4">
        <div class="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm">
        <div class="tw-flex tw-justify-between tw-items-start">
            <div>
                <h3 class="tw-font-bold">SmartMonitor</h3>
                <p class="tw-text-gray-600">smartHSE@gmail.com</p>
            </div>
            <div class="tw-flex tw-flex-wrap tw-gap-2">
                <span class="tw-bg-green-100 tw-text-green-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Активен
                </span>
                <span class="tw-bg-blue-100 tw-text-blue-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Онлайн
                </span>
                <span class="tw-bg-green-100 tw-text-green-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Одобрен
                </span>
                <span class="tw-bg-gray-100 tw-text-gray-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Венчурная компания
                </span>
            </div>
            </div>
        </div>

        <div class="tw-bg-white tw-p-4 tw-rounded-lg tw-shadow-sm">
            <div class="tw-flex tw-justify-between tw-items-start">
            <div>
                <h3 class="tw-font-bold">MongolStartup</h3>
                <p class="tw-text-gray-600">mongols@gmail.com</p>
                </div>
            <div class="tw-flex tw-flex-wrap tw-gap-2">
                <span class="tw-bg-red-100 tw-text-red-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Не активен
                </span>
                <span class="tw-bg-gray-100 tw-text-gray-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Офлайн
                </span>
                <span class="tw-bg-red-100 tw-text-red-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Не одобрен
                </span>
                <span class="tw-bg-gray-100 tw-text-gray-800 tw-px-2 tw-py-1 tw-rounded-full tw-text-xs">
                    Бизнес-ангел
                </span>
            </div>
        </div>
    </div>
    </div>

        <div class="tw-flex tw-justify-between tw-items-center tw-mt-6">
            <button class="tw-px-4 tw-py-2 tw-border tw-rounded-lg">
                Previous
            </button>
            <span>Page 1 of 10</span>
            <button class="tw-px-4 tw-py-2 tw-border tw-rounded-lg">
                Next
            </button>
        </div>
    </div>
</template>

<script setup>
    const filters = [
    'Пользователь',
    'Статус',
    'Статус действия',
    'Статус заявки',
    'Роль'
    ]; 
</script>