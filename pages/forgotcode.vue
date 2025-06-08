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
	 <div class="tw-mt-[20px]" :class="[otp.length === 6 ? 'tw-text-white' : 'tw-text-gray-600']">
		<button @click="otpCodeVerify" :class="[otp.length === 6 ? 'tw-bg-emerald-400' : 'tw-bg-[#D2D4DB]']" type="button" class="tw-bg-[#D2D4DB] tw-w-full tw-py-[16px] tw-px-[72px] tw-text-[#9296A1] tw-font-bold tw-text-[16px]">Подтвердить</button>
	 </div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useServiceStore } from '~/stores/services';

definePageMeta({
	layout: 'default',
	name: ''
})

const serviceStore = useServiceStore();
const otp = shallowRef('');
const email = ref(localStorage.getItem('email'))
const router = useRouter();

const otpCodeVerify = () => {
	localStorage.setItem('otp', otp.value)
	router.push('/newuser')
}
onMounted(() => {
})
</script>

<style scoped>

</style>