<script setup>
    import StatBox from '@/components/Adminpanel/StatBox.vue'
    import Filteruser from '@/components/Adminpanel/Filteruser.vue'
    definePageMeta({
        layout: 'admin',
        title: 'Админ панель',
        description: 'Статистика и управление сайтом'
    })
</script>

<template>
    <div class="tw-flex tw-bg-white tw-rounded-lg tw-shadow-sm">
        <div class="tw-flex-1 tw-py-4 tw-text-center tw-border-r tw-border-gray-200">
        <p class="tw-text-3xl tw-font-bold tw-text-gray-800">112</p>
        <p class="tw-text-sm tw-text-gray-600 tw-mt-1">Онлайн</p>
        </div>
        
        <div class="tw-flex-1 tw-py-4 tw-text-center tw-border-r tw-border-gray-200">
        <p class="tw-text-3xl tw-font-bold tw-text-gray-800">254</p>
        <p class="tw-text-sm tw-text-gray-600 tw-mt-1">Просмотров профиля</p>
        </div>
        
        <div class="tw-flex-1 tw-py-4 tw-text-center tw-border-r tw-border-gray-200">
        <p class="tw-text-3xl tw-font-bold tw-text-gray-800">157</p>
        <p class="tw-text-sm tw-text-gray-600 tw-mt-1">Просмотров портфолио</p>
        </div>
        
        <div class="tw-flex-1 tw-py-4 tw-text-center">
        <p class="tw-text-3xl tw-font-bold tw-text-gray-800">81</p>
        <p class="tw-text-sm tw-text-gray-600 tw-mt-1">Звонков</p>
        </div>
    </div>
    <div class="tw-mt-6">
        <Filteruser />
    </div>
</template>