<template>
    <div class="tw-space-y-6">
        <div class="tw-bg-white tw-rounded-lg tw-shadow-sm">
            <table class="tw-w-full tw-text-left tw-text-sm">
            <thead class="tw-bg-gray-50">
                <tr>
                <th class="tw-p-4">
                    <input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" />
                </th>
                <th class="tw-p-4">{{ $t('user') }}</th>
                <th class="tw-p-4">{{ $t('status') }}</th>
                <th class="tw-p-4">{{ $t('actionStatus') }}</th>
                <th class="tw-p-4">{{ $t('applicationStatus') }}</th>
                <th class="tw-p-4">{{ $t('role') }}</th>
                <th class="tw-p-4">{{ $t('actions') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(startup, index) in pendingStartups" :key="startup.id" class="tw-border-b">
                <td class="tw-p-4">
                    <input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" />
                </td>
                <td class="tw-p-4 tw-flex tw-items-center tw-gap-2">
                    <img :src="getImage(startup.profilePhotoPath)" class="tw-w-8 tw-h-8 tw-rounded-full" />
                    <div>
                    <div class="tw-font-medium">{{ startup.fullName }}</div>
                    <div class="tw-text-gray-500">{{ startup.publicEmail }}</div>
                    </div>
                </td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.status || $t('active') }}</td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.actionStatus || $t('online') }}</td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.applicationStatus || $t('approved') }}</td>
                <td class="tw-p-4">{{ startup.investorType || $t('ventureCompany') }}</td>
                <td class="tw-p-4 tw-flex tw-gap-2">
=                    <button @click="fixStartup(startup)" class="tw-text-blue-500 hover:tw-text-blue-700">
                    <img src="@/assets/icons/admin/btn_fix.svg" alt="Fix" class="tw-w-5 tw-h-5" />
                    </button>
                    <button @click="deleteStartup(startup.id)" class="tw-text-red-500 hover:tw-text-red-700">
                    <img src="@/assets/icons/admin/btn_delate.svg" alt="Delete" class="tw-w-5 tw-h-5" />
                    </button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    
        <div class="tw-flex tw-justify-between tw-items-center">
            <button class="tw-px-4 tw-py-2 tw-border tw-rounded-lg">{{ $t('previous') }}</button>
            <span>{{ $t('page', { page: 1, total: 10 }) }}</span>
            <button class="tw-px-4 tw-py-2 tw-border tw-rounded-lg">{{ $t('next') }}</button>
        </div>
    </div>
</template>
    
    <script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    
    const pendingStartups = ref([])
    
    const getAdminDetail = async () => {
        try {
        const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Investor', {
            headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
            }
        })
        pendingStartups.value = response.data
        console.log('Pending startups:', response.data)
        } catch (error) {
        console.error('Ошибка при получении стартапов:', error)
        }
    }
    
    const deleteStartup = (id) => {
        console.log('Deleting startup with ID:', id)
        axios.delete(`https://zhervc-api.azurewebsites.net/api/Investor/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        }
        })
        .then(() => {
        getAdminDetail()
        })
        .catch(error => {
        console.error('Ошибка при удалении стартапа:', error)
        })
    }
    
    const fixStartup = (startup) => {
        console.log('Fixing startup:', startup)
    }
    
    const getImage = (logo) => {
        return `https://zhervc-api.azurewebsites.net/${logo}`
    }
    
    onMounted(() => {
        getAdminDetail()
    })
</script>
    