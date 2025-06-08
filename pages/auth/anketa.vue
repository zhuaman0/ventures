<template>
	<div class="tw-py-4 tw-px-4 tw-max-w-[1300px] tw-mx-auto">
		<div>
			<h1 class="tw-text-center tw-text-[#181236] tw-font-[600] tw-text-[32px]">Анкета</h1>
			<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-mx-auto tw-my-[30px]">
				<div class="tw-px-4 tw-py-4 tw-w-full">
					<StartupFormStartup v-if="role === 'Startup'"/>
					<InvestorFormInvvestor v-else-if="role === 'Investor'"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { StartupFormStartup } from '#components';
import axios from 'axios';
import { useRouter } from 'vue-router';

const role = ref(localStorage.getItem('role'))
const router = useRouter()
const token = localStorage.getItem('JWT_TOKEN')
const startUps = ref<any>([])
const investors = ref<any>([])

async function fetchAndCheckData(url: string, storageRef: any) {
	try {
		const res = await axios.get(url, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		storageRef.value = res.data
		if (res && res.data) {
			const data = res.data
			const isEmpty = (Array.isArray(data) && data.length === 0) || (!Array.isArray(data) && Object.keys(data).length === 0)
			if (!isEmpty) {
				router.push('/')
			}
		}
	} catch (err) {
		console.log(err)
	}
}

onMounted(() => {
	if (role.value === 'Startup') {
		fetchAndCheckData('https://zhervc-api.azurewebsites.net/api/Startups/me', startUps)
	} else if (role.value === 'Investor') {
		fetchAndCheckData('https://zhervc-api.azurewebsites.net/api/Investor/me', investors)
	}
})
</script>

<style scoped>
</style>
