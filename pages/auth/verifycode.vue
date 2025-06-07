<template>
	<div class="tw-px-4">
		<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-mx-auto tw-py-4 tw-px-4  tw-my-[30px] lg:tw-my-[60px]">
			<p class="tw-text-[#181236] tw-font-[400] tw-text-[16px] tw-leading-[20px]">Мы отправили на почту {{ email }} сообщение 6-ти значным кодом, введите его.</p>
			    <v-otp-input
      v-model="otp"
      :loading="serviceStore.pageLoading"
      length="6"
      variant="underlined"
    ></v-otp-input>
	 <p class="tw-text-[#767A87] tw-text-[14px] tw-leading-[20px] tw-font-[400]">
		Отправить новый код через {{ time }} сек
	 </p>
	 <div class="tw-mt-[20px]" :class="[otp.length === 6 ? 'tw-text-white' : 'tw-text-gray-600']">
		<button @click="checkVerify" :class="[otp.length === 6 ? 'tw-bg-[#36CE9F]' : 'tw-bg-[#D2D4DB]']" type="button" class="tw-bg-[#36CE9F] tw-w-full tw-py-[16px] tw-px-[72px] tw-text-[#9296A1] tw-font-bold tw-text-[16px]">Подтвердить</button>
	 </div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useServiceStore } from '~/stores/services';

definePageMeta({
	layout: 'default',
	name: 'verify'
})

const serviceStore = useServiceStore();
const otp = shallowRef('31445');
const time = ref(60)
const email = ref(localStorage.getItem('email'))
const router = useRouter();
onMounted(() => {
	console.log(email.value)
	console.log(otp.value)
	const timer = setInterval(() => {
		if(time.value > 0) {
			time.value--;
		}else {
			serviceStore.modal.show = false;
			serviceStore.modal.header = 'Время истекло. Хотите отправить код снова?';
			serviceStore.modal.buttonText = 'Да'
	      serviceStore.modal.onClick = () => {
			serviceStore.modal.show = false
			time.value = 60
	}
		}
	}, 1000)
})

const checkVerify = async () => {
	try {
		const response = await axios.post('https://zhervc-api.azurewebsites.net/api/Users/verify-otp', {
			email: email.value,
			otpCode: otp.value,
		}, {
			headers: {
				'Content-Type': 'application/json'
			}
		})
		console.log('Checked all corect', response.data)
		if(response.data === 'Email confirmed.') {
			serviceStore.toast.success("Verifyed Code");
			router.push('/auth/login/')

		}else {
			serviceStore.toast.error("Not correct code")
		}
	}catch(err) {
		console.log(err)
	}
}
</script>

<style scoped>

</style>