	<template>
		<div class="tw-max-w-7xl tw-mx-auto tw-px-4 sm:tw-px-6 lg:tw-px-8 tw-mt-5 tw-mb-[90px]">
		<RouteRouterPath :breadcrumbs="breadcrumbs" />
	
		<h1 class="tw-font-bold tw-text-[28px] sm:tw-text-[32px] tw-my-5">
			Редактировать личные данные
		</h1>
	
		<div class="tw-max-w-2xl tw-bg-white tw-p-5 tw-rounded-lg tw-shadow-sm">
			<div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
			<h2 class="tw-font-bold tw-text-[18px] sm:tw-text-[20px]">Личные данные</h2>
			<img
				@click="$router.push('/user/edit')"
				src="/assets/icons/pencil.svg"
				alt="Редактировать"
				class="tw-w-5 tw-h-5 tw-cursor-pointer"
			/>
			</div>
	
			<ul class="tw-grid tw-grid-cols-1 tw-gap-6">
			<li>
				<h3 class="tw-text-[14px] tw-text-[#767A87]">Имя и фамилия</h3>
				<v-text-field
				class="tw-w-full tw-mt-2"
				variant="outlined"
				autocomplete="off"
				v-model="form.fullname"
				/>
			</li>
			<li>
				<h3 class="tw-text-[14px] tw-text-[#767A87]">Электронная почта</h3>
				<v-text-field
				class="tw-w-full tw-mt-2"
				variant="outlined"
				autocomplete="off"
				v-model="form.email"
				/>
			</li>
			<li>
				<h3 class="tw-text-[14px] tw-text-[#767A87]">Номер телефона</h3>
				<v-text-field
				class="tw-w-full tw-mt-2"
				variant="outlined"
				autocomplete="off"
				v-maska="'+7 (###) ###-##-##'"
				v-model="form.phonenumber"
				/>
			</li>
			</ul>
		</div>
	
		<div
			class="tw-max-w-2xl tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 tw-gap-4 tw-mt-6"
		>
			<button
			class="tw-w-full tw-text-center tw-py-3 tw-bg-gray-100 hover:tw-bg-gray-200 tw-text-[#181236] tw-font-[400]"
			>
			Отменить
			</button>
			<button
			@click="changeProfileUser"
			class="tw-w-full tw-bg-[#36CE9F] hover:tw-bg-[#2dbb8c] tw-text-white tw-text-center tw-py-3 "
			>
			Сохранить изменения
			</button>
		</div>
		</div>
	</template>
	

<script setup lang="ts">
import axios from 'axios';
import { useServiceStore } from '~/stores/services';
const token = localStorage.getItem('JWT_TOKEN')

const breadcrumbs = [
{ 
		title: 'Главная',
		disabled: false,
		href: '/'
	},
	{
		title: 'Профиль',
		disabled: false,
    	href: '/user/account' 
	},
	{
		title: 'Редактировать личные данные',
		disabled: true,
    	href: '/auth/login/' 
	}
]

const form = ref({
	fullname: '',
	email: '',
	phonenumber: '',
})

const serviceStore = useServiceStore();

const changeProfileUser = async() => {
	try {
		const response = await axios.put('https://zhervc-api.azurewebsites.net/api/Users/me', {
			fullname: form.value.fullname,
			phonenumber: form.value.phonenumber,
			email: form.value.email
		},
		{
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json'
			}
		})
		window.location.reload();

		console.log('User updated');
	}catch(err) {
		console.log(err)
	}
}
</script>

<style scoped>

</style>