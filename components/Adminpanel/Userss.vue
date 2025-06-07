<script setup>
    import { ref, computed, onMounted } from 'vue'
    import axios from 'axios'
    
    const pendingStartups = ref([])
    const currentPage = ref(1)
    const itemsPerPage = 5
    
    const paginatedUsers = computed(() => {
        const start = (currentPage.value - 1) * itemsPerPage
        const end = start + itemsPerPage
        return pendingStartups.value.slice(start, end)
    })
    
    const totalPages = computed(() => {
        return Math.ceil(pendingStartups.value.length / itemsPerPage)
    })
    
    const getAdminDetail = async () => {
        try {
        const response = await axios.get('https://zhervc-api.azurewebsites.net/api/admin/users', {
            headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
            }
        })
        pendingStartups.value = response.data
        console.log('Pending startups:', response.data)
        } catch (error) {
        console.error('Ошибка при получении данных о пользователях:', error)
        }
    }
    
    const deleteStartup = async (id) => {
        try {
        await axios.delete(`https://zhervc-api.azurewebsites.net/api/admin/users/${id}`, {
            headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`,
            }
        })
        await getAdminDetail()
        } catch (error) {
        console.error('Ошибка при удалении пользователя:', error)
        }
    }
    
    const getImage = (logo) => {
        if (logo) {
        return `https://zhervc-api.azurewebsites.net/${logo}`
        } else {
        const randomLogos = [
            'https://i.pravatar.cc/51',
            'https://i.pravatar.cc/62',
            'https://i.pravatar.cc/73',
            'https://i.pravatar.cc/84',
            'https://i.pravatar.cc/95',
            'https://i.pravatar.cc/106',
            'https://i.pravatar.cc/117',
            'https://i.pravatar.cc/128',
        ]
        return randomLogos[Math.floor(Math.random() * randomLogos.length)]
        }
    }
    
    onMounted(() => {
        getAdminDetail()
    })
</script>
    

<template>
    <div class="tw-space-y-6">
        <div class="tw-bg-white tw-rounded-lg tw-shadow-sm">
            <table class="tw-w-full tw-text-left tw-text-sm">
            <thead class="tw-bg-gray-50">
                <tr>
                <th class="tw-p-4"><input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" /></th>
                <th class="tw-p-4">{{ $t('user') }}</th>
                <th class="tw-p-4">{{ $t('status') }}</th>
                <th class="tw-p-4">{{ $t('actionStatus') }}</th>
                <th class="tw-p-4">{{ $t('applicationStatus') }}</th>
                <th class="tw-p-4">{{ $t('role') }}</th>
                <th class="tw-p-4">{{ $t('actions') }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="startup in paginatedUsers" :key="startup.id" class="tw-border-b">
                <td class="tw-p-4"><input type="checkbox" class="tw-w-4 tw-h-4 tw-rounded" /></td>
                <td class="tw-p-4 tw-flex tw-items-center tw-gap-2">
                    <img :src="getImage(startup.profilePhotoPath)" class="tw-w-8 tw-h-8 tw-rounded-full tw-object-cover" />
                    <div>
                        <div class="tw-font-medium tw-max-w-[150px] tw-truncate">
                        {{ startup.fullname }}
                        </div>
                        <div class="tw-text-gray-500 tw-max-w-[150px] tw-truncate">
                        {{ startup.email }}
                        </div>
                    </div>
                    </td>

                <td class="tw-p-4 tw-text-green-600">{{  }}</td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.actionStatus || $t('online') }}</td>
                <td class="tw-p-4 tw-text-green-600">{{ startup.applicationStatus || $t('approved') }}</td>
                <td class="tw-p-4">{{ startup.role || $t('ventureCompany') }}</td>
                <td class="tw-p-4 tw-flex tw-gap-2">
                    <button @click="fixStartup(startup)" class="tw-text-blue-500 hover:tw-text-blue-700">
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
    
        <div class="tw-flex tw-justify-center tw-mt-6">
            <v-pagination
                v-model="currentPage"
                :length="totalPages"
                :total-visible="5"
                class="tw-mt-4"
                color="#228B6B"
                style="--v-theme-primary: #228B6B;"
            />
            </div>
    </div>
</template>