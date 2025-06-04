<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
		<RouteRouterPath :breadcrumbs="breadcrumbs"/>
		<h1 class="tw-font-bold tw-text-[32px] tw-my-[15px]">Профиль</h1>
		<div class="tw-max-w-[600px] tw-bg-white tw-p-4">
			<div class="tw-flex tw-justify-between tw-items-center tw-mb-[20px]">
				<h1 class="tw-font-bold tw-text-[20px]">Личные данные</h1>
				<img @click="$router.push('/user/edit')" src="/assets/icons/pencil.svg" alt="">
			</div>
			<ul class="tw-grid tw-grid-cols-2 tw-gap-5">
				<li>
					<h1 class="tw-text-[14px] tw-text-[#767A87]">Имя и фамилия</h1>
					<p  class="tw-text-[16px] tw-text-[#181236]">{{ serviceStore.user.fullname }}</p>
				</li>
				<li>
					<h1 class="tw-text-[14px] tw-text-[#767A87]">Номер телефона</h1>
					<p class="tw-text-[16px] tw-text-[#181236]">{{ serviceStore.user.phonenumber }}</p>
				</li>
				<li>
					<h1 class="tw-text-[14px] tw-text-[#767A87]">Электронная почта</h1>
					<p class="tw-text-[16px] tw-text-[#181236]">{{ serviceStore.user.email }}</p>
				</li>
			</ul>
		</div>
		<div class="tw-bg-white tw-max-w-[600px] tw-mt-6 tw-flex tw-justify-between tw-items-center tw-py-4 tw-px-2">
			<h1 class="tw-text-[#181236] tw-font-bold tw-text-[20pxx]">Изменить пароль</h1>
			<Icon name="mdi:arrow-right" />
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useServiceStore } from '~/stores/services';

definePageMeta({
	layout: 'default',
	middleware: 'auth'
})

const breadcrumbs = [
{ 
		title: 'Главная',
		disabled: false,
		href: '/'
	},
	{
		title: 'Профиль',
		disabled: true,
    	href: '/auth/login/' 
	}
]

const serviceStore = useServiceStore();

const getUserInfo = async () => {
	const token = localStorage.getItem('JWT_TOKEN');
	if(!token) {
		console.log("In server have not token")
		return;
	}

	try {
		const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Users/me', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
	 serviceStore.user = response.data
	 console.log(response.data)
	 console.log("You have take token")
	}catch(err) {
		console.log(err)
		console.log('You have problem')
	}
}

onMounted(() => {
	getUserInfo()
})
</script>

<style scoped>

</style>