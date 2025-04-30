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
import { useServiceStore } from '~/stores/services';

 
definePageMeta({
	layout: 'default',
	name: 'login'
})

const serviceStore = useServiceStore();

const visible = ref(false)
const router = useRouter();
const gmail = ref('')
const password = ref('')

const loginUser = () => {
	if(gmail.value.length === 0 && password.value.length === 0) {
		serviceStore.toast.error('Fill the all gap')
	}else {
		alert('Ok')
	}
}
</script>

<style scoped>

</style>