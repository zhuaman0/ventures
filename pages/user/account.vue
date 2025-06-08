<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-mt-5 tw-mb-[90px]">
	  <RouteRouterPath :breadcrumbs="breadcrumbs" />
  
	  <h1 class="tw-font-bold tw-text-[28px] sm:tw-text-[32px] tw-my-5">Профиль</h1>
  
	  <div class="tw-max-w-2xl tw-bg-white tw-p-5 tw-rounded-lg tw-shadow-sm">
		<div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
		  <h2 class="tw-font-bold tw-text-[18px] sm:tw-text-[20px]">Личные данные</h2>
		  <img
			@click="$router.push('/user/edit')"
			src="/assets/icons/pencil.svg"
			alt="Редактировать"
			class="tw-cursor-pointer tw-w-5 tw-h-5"
		  />
		</div>
  
		<ul class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-6">
		  <li>
			<h3 class="tw-text-[14px] tw-text-[#767A87]">Имя и фамилия</h3>
			<p class="tw-text-[16px] tw-text-[#181236]">{{ serviceStore.user.fullname }}</p>
		  </li>
		  <li>
			<h3 class="tw-text-[14px] tw-text-[#767A87]">Номер телефона</h3>
			<p class="tw-text-[16px] tw-text-[#181236]">{{ serviceStore.user.phonenumber }}</p>
		  </li>
		  <li class="sm:tw-col-span-2">
			<h3 class="tw-text-[14px] tw-text-[#767A87]">Электронная почта</h3>
			<p class="tw-text-[16px] tw-text-[#181236]">{{ serviceStore.user.email }}</p>
		  </li>
		</ul>
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