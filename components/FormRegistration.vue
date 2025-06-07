<template>
	<div class="tw-px-4 sm:tw-px-6 lg:tw-px-0">
		<h1 class="tw-text-[22px] sm:tw-text-[24px] tw-font-[600] tw-text-center tw-mt-6">
			Регистрация {{ type }}
		</h1>
	
		<div
			class="tw-w-full tw-max-w-[530px] tw-mt-6 tw-mb-[30px] tw-bg-white tw-mx-auto"
		>
			<div class="tw-p-6">
			<form class="tw-w-full" @submit.prevent="submit">
				<div class="tw-mb-4">
				<label class="tw-text-[#767A87] tw-text-[14px]" for="fullname">Имя и фамилия</label>
				<v-text-field
					class="tw-w-full tw-mt-2"
					id="fullname"
					placeholder="Введите имя и фамилию"
					variant="outlined"
					autocomplete="off"
					v-model="form.fullName"
				/>
				</div>
	
				<div class="tw-mb-4">
				<label class="tw-text-[#767A87] tw-text-[14px]" for="email">Электронная почта</label>
				<v-text-field
					class="tw-w-full tw-mt-2"
					id="email"
					placeholder="name@example.com"
					variant="outlined"
					autocomplete="off"
					v-model="form.email"
				/>
				</div>
	
				<div class="tw-mb-4">
				<label class="tw-text-[#767A87] tw-text-[14px]" for="phonenumber">Номер телефона</label>
				<v-text-field
					v-maska="'+7 (###) ###-##-##'"
					class="tw-w-full tw-mt-2"
					id="phonenumber"
					placeholder="+7 (---) --- --- --"
					variant="outlined"
					autocomplete="off"
					v-model="form.phoneNumber"
				/>
				</div>
	
				<div class="tw-mb-4">
				<label class="tw-text-[#767A87] tw-text-[14px]" for="password">Пароль</label>
				<v-text-field
					id="password"
					class="tw-mt-2"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					placeholder="Введите пароль"
					variant="outlined"
					autocomplete="new-password"
					@click:append-inner="visible = !visible"
					v-model="form.password"
					:rules="[v => !!v || 'Это поле обязательно']"
				/>
				</div>
	
				<div class="tw-mb-4">
				<label class="tw-text-[#767A87] tw-text-[14px]" for="repeatpassword">Повторите пароль</label>
				<v-text-field
					id="repeatpassword"
					class="tw-mt-2"
					:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
					:type="visible ? 'text' : 'password'"
					placeholder="Повторите пароль"
					variant="outlined"
					autocomplete="new-password"
					@click:append-inner="visible = !visible"
				/>
				</div>
	
				<div class="tw-flex tw-items-start tw-gap-3 tw-mb-5">
				<v-checkbox color="green" />
				<span class="tw-text-[14px]">
					Подтверждаю, что я ознакомился(ась) с<br />
					<span class="tw-text-[#36CE9F]">
					Пользовательским соглашением и обработкой персональных данных
					</span>
				</span>
				</div>
	
				<div class="tw-mb-4">
				<button
					type="submit"
					class="tw-bg-[#36CE9F] hover:tw-bg-[#2dbb8c] tw-font-bold tw-w-full tw-py-4"
				>
					<p class="tw-text-white">Зарегистрироваться</p>
				</button>
				</div>
	
				<div class="tw-my-[10px] tw-flex tw-justify-center tw-gap-2 tw-text-sm">
				<p>Уже зарегистрированы?</p>
				<a class="tw-text-[#36CE9F] tw-font-bold hover:tw-underline" href="/auth/login">Войти</a>
				</div>
			</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useServiceStore } from '~/stores/services';

const visible = ref(false);
defineProps<{
	type: any
}>()

const serviceStore = useServiceStore();
const router = useRouter()

const registrationButton = () => {
	serviceStore.isRegistered = true
	router.push('/auth/verifycode/')
}


const form = ref({
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
  role: 'Investor'
})

const submit = async () => {
	try {
		const response = await axios.post("https://zhervc-api.azurewebsites.net/api/Users/register", {
        fullName: form.value.fullName,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber,
        password: form.value.password,
        role: form.value.role
}, {
  headers: {
    'Content-Type': 'application/json'
  }
});

		serviceStore.isRegistered = true
		console.log("Registered Succesfully")
		localStorage.setItem('email', form.value.email)
		router.push('/auth/verifycode/')
	}catch (err) {
		console.log(err)
	}
}
</script>

<style scoped>

</style>
