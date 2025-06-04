<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
		<RouteRouterPath :breadcrumbs="breadcrumbs"/>
		<h1 class="tw-font-bold tw-text-[32px] tw-my-[15px]">Редактировать личные данные</h1>
		<div class="tw-max-w-[600px] tw-bg-white tw-p-4">
			<div class="tw-flex tw-justify-between tw-items-center tw-mb-[20px]">
				<h1 class="tw-font-bold tw-text-[20px]">Личные данные</h1>
				<img @click="$router.push('/user/edit')" src="/assets/icons/pencil.svg" alt="">
			</div>
			<ul class="tw-grid tw-grid-cols-1 tw-gap-5">
				<li>
					<h1 class="tw-text-[14px] tw-text-[#767A87]">Имя и фамилия</h1>
					<v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder=""
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.fullname"
               ></v-text-field>
				</li>
				<li>
					<h1 class="tw-text-[14px] tw-text-[#767A87]">Электронная почта</h1>
					<v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder=""
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.email"
               ></v-text-field>
				</li>
				<li>
					<h1 class="tw-text-[14px] tw-text-[#767A87]">Номер телефона</h1>
					<v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder=""
							  v-maska="'+7 (###) ###-##-##'"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.phonenumber"
               ></v-text-field>
				</li>
			</ul>
		</div>
		<div class="tw-max-w-[600px] tw-mt-6 tw-flex tw-justify-between tw-items-center tw-py-4 tw-px-2">
			<button class="tw-w-full tw-text-center tw-py-3">Отменить</button>
			<button @click="changeProfileUser" class="tw-w-full tw-bg-[#36CE9F] tw-text-center tw-text-white tw-py-3">Сохранить изменения</button>
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