<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'

    const allStartups = ref([])
    const pendingStartups = ref([])

    const getAdminDetail = async () => {
    try {
        const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Startups', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        }
        })
        allStartups.value = response.data
        console.log('All startups:', response.data)
    } catch (error) {
        console.error('Error fetching all startups:', error)
    }
    }

    const getPendingStartups = async () => {
    try {
        const response = await axios.get('https://zhervc-api.azurewebsites.net/api/admin/startups/pending', {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        }
        })
        pendingStartups.value = response.data
        console.log('Pending startups:', response.data)
    } catch (error) {
        console.error('Error fetching pending startups:', error)
    }
    }

    const updateStartupStatus = (id, status) => {
    axios.put(`https://zhervc-api.azurewebsites.net/api/admin/startups/${id}/status`, { status: status }, {
        headers: {
        Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        }
    })
    .then(() => {
        getPendingStartups() 
        getAdminDetail()
    })
    .catch(error => {
        console.error('Error updating status:', error)
    })
    }

    const deleteStartup = (id) => {
    axios.delete(`https://zhervc-api.azurewebsites.net/api/admin/startups/${id}`, {
        headers: {
        Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
        }
    })
    .then(() => {
        getAdminDetail()
        getPendingStartups()
    })
    .catch(error => {
        console.error('Error deleting startup:', error)
    })
    }

    const getImage = (logo) => {
    return logo ? `https://zhervc-api.azurewebsites.net/${logo}` : 'https://i.pravatar.cc/32'
    }

    onMounted(() => {
    getAdminDetail()
    getPendingStartups()
    })
</script>

<template>
    <div class="tw-space-y-6">
        <div class="tw-bg-white tw-px-4 tw-py-4 tw-rounded-lg tw-shadow-sm">
        <h3 class="tw-text-lg tw-font-semibold">{{ $t('Все стартапы') }}</h3>
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
            <tr v-for="(startup, index) in allStartups" :key="startup.id" class="tw-border-b">
                <td class="tw-p-4">
                <input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" />
                </td>
                <td class="tw-p-4 tw-flex tw-items-center tw-gap-2">
                <div>
                    <div class="tw-font-medium">{{ startup.publicName }}</div>
                    <div class="tw-text-gray-500">{{ startup.organizationName }}</div>
                    <div class="tw-text-gray-500">{{ startup.countryName }}</div>
                </div>
                </td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.status || $t('active') }}</td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.actionStatus || $t('online') }}</td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.applicationStatus || $t('approved') }}</td>
                <td class="tw-p-4">{{ startup.investorType || $t('ventureCompany') }}</td>
                <td class="tw-p-4 tw-flex tw-gap-2">
                <button @click="deleteStartup(startup.id)" class="tw-text-red-500 hover:tw-text-red-700">
                    <img src="@/assets/icons/admin/btn_delate.svg" alt="Delete" class="tw-w-5 tw-h-5" />
                </button>
                </td>
            </tr>
            </tbody>
        </table>
        </div>

        <div class="tw-bg-white tw-rounded-lg tw-px-4 tw-py-4 tw-shadow-sm">
        <h3 class="tw-text-lg tw-font-semibold">{{ $t('Процессе') }}</h3>
        <table class="tw-w-full tw-text-left tw-text-sm">
            <thead class="tw-bg-gray-50">
            <tr>
                <th class="tw-p-4">
                <input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" />
                </th>
                <th class="tw-p-4">{{ $t('user') }}</th>
                <th class="tw-p-4">{{ $t('status') }}</th>
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
                <div>
                    <div class="tw-font-medium">{{ startup.publicName }}</div>
                    <div class="tw-text-gray-500">{{ startup.organizationName }}</div>
                    <div class="tw-text-gray-500">{{ startup.countryName }}</div>
                </div>
                </td>
                <td class="tw-p-4 tw-text-orange-500">{{ startup.status || $t('Pending') }}</td>
                <td class="tw-p-4">{{ startup.investorType || $t('ventureCompany') }}</td>
                <td class="tw-p-4 tw-flex tw-gap-2">
                <button @click="updateStartupStatus(startup.id, 'Accepted')" class="tw-bg-green-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg">
                    Accept
                </button>
                <button @click="updateStartupStatus(startup.id, 'Rejected')" class="tw-bg-red-500 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg">
                    Reject
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
