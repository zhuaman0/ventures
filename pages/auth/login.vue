<template>
	<div class="tw-px-4">
		<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-mx-auto  tw-my-[30px] lg:tw-my-[60px]">
			<div class="tw-flex tw-w-full tw-justify-center">
				<h1 class="tw-text-[#000] tw-text-[24px] tw-font-bold">Войти</h1>
			</div>
			<div class="tw-px-4 tw-py-4 tw-w-full">
				<form class="tw-w-full" action="">
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Электронная почта</label>
					   <v-text-field
						     v-model="gmail"
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="name@example.com"
                       variant="outlined"
							  autocomplete="off"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="password">Электронная почта</label>
						<v-text-field
						  v-model="password"
					     class="tw-mt-2"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    placeholder="Введите пароль"
                    variant="outlined"
                    @click:append-inner="visible = !visible"
						  autocomplete="new-password"
                  ></v-text-field>
					</div>
				</form>
				<div class="tw-flex tw-flex-row tw-justify-between tw-items-center tw-mb-4">
					<v-checkbox color="green" label="Запомнить меня"></v-checkbox>
					<span class="tw-text-[#36CE9F] tw-font-bold tw-text-[16px] tw-leading-[20px]">Забыл пароль?</span>
				</div>
				<button @click="loginUser" class="tw-w-full tw-bg-[#36CE9F] tw-text-[#fff] tw-h-[48px] tw-mb-4">Войти</button>
				<div class="tw-flex tw-items-center tw-justify-center">
					<p class="tw-text-[#767A87] tw-text-[16px]">Нет аккаунта?</p>
					<a class="tw-text-[#36CE9F] tw-text-[16px]" href="/auth/registration">Зарегистрироваться</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useServiceStore } from '~/stores/services';


const serviceStore = useServiceStore();

const visible = ref(false)
const router = useRouter();
const gmail = ref('')
const password = ref('')

const loginUser = async() => {
	try {
		const response = await axios.post('https://zhervc-api.azurewebsites.net/api/Users/login', {
			email: gmail.value,
			password: password.value
		},
		{
			headers: {
				'Content-Type': 'application/json'
			}
		})
   const token = response.data.token;
   serviceStore.JWT_TOKEN = token;
	serviceStore.setToken(token)
	router.push('/user/account/')
	}catch(err) {
		console.log(err)
	}
}

onMounted(() => {
	serviceStore.modal.show = false
	serviceStore.modal.header = 'Hi baby',
	serviceStore.modal.buttonText = 'Click'
	serviceStore.modal.onClick = () => {
		serviceStore.modal.show = false
	}
})

</script>

<style scoped>

</style>
