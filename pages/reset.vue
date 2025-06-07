<template>
		<div class="tw-px-4">
		<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-py-5 tw-mx-auto  tw-my-[30px] lg:tw-my-[60px]">
			<div class="tw-flex tw-w-full tw-justify-center">
				<h1 class="tw-text-[#000] tw-text-[24px] tw-font-bold">Восстановить пароль</h1>
			</div>
			<div class="tw-px-4 tw-pt-6">
				<p class="tw-text-[#181236] tw-text-[16px]">Введите электронную почту которую вы указали при регистрации.</p>
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
				</form>
				<button @click="resetPassword" class="tw-w-full tw-bg-[#36CE9F] tw-text-[#fff] tw-h-[48px] tw-mb-4">Войти</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'
const router = useRouter();

definePageMeta({
	layout: 'default'
})

const gmail = ref('')

const resetPassword = async () => {
	try {
		const res = await axios.post('https://zhervc-api.azurewebsites.net/api/Users/request-password-reset', gmail.value, {
			headers: {
				'Content-Type': 'application/json' 
			}
		})
		localStorage.setItem('email', gmail.value)
		console.log(res)
		router.push('/forgotcode')
	}catch(err) {
		console.log(err)
	}
}
</script>

<style scoped>

</style>