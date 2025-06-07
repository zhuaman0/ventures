<template>
	<div
	class="tw-flex tw-fixed tw-items-center tw-justify-center tw-z-[100] tw-bg-[#00000069] tw-left-0 tw-top-0 tw-w-full tw-h-full"
	>
	<transition
	enter-active-class="animite_animated animate_zoomIn animate_faster"
	leave-active-class="animite_animated animate_fadeOut animate_faster"
	appear
	>
	<div class="tw-max-w-[390px] tw-min-w-[390px] tw-max-h-max tw-rounded-[12px] tw-bg-white tw-px-4 tw-pt-[30px] tw-pb-4">
		<div class="tw-flex tw-justify-between tw-items-center tw-h-full">
	   <h1 class="tw-text-[#181236] tw-font-bold tw-text-[20px]">
			Написать в службу поддержки
		</h1>
		<img src="/assets/icons/back.svg" alt="">
		</div>
		<form action="">
			<div class="tw-mb-4 tw-mt-4">
				<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Ваше имя</label>
				<v-text-field
				     v-model="fullname"
				     class="tw-w-full tw-text-black tw-mt-2 tw-border-[#D2D4DB] tw-border-[1px]"
				     id="gmail"
                 placeholder="Введите имя"
                 variant="outlined"
					  autocomplete="off"
            ></v-text-field>
			</div>
			<div class="tw-mb-4 tw-mt-4">
				<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Электронная почта</label>
				<v-text-field
				     v-model="email"
				     class="tw-w-full tw-text-black tw-mt-2 tw-border-[#D2D4DB] tw-border-[1px]"
				     id="gmail"
                 placeholder="name@example.com"
                 variant="outlined"
					  autocomplete="off"
            ></v-text-field>
			</div>
			<div class="tw-mb-4 tw-mt-4">
				<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Электронная почта</label>
				<v-textarea v-model="desc" class="tw-w-full tw-text-black tw-mt-2 tw-border-[#D2D4DB] tw-border-[1px]" label="Напишите о свое сообщение..."></v-textarea>
			</div>
		</form>
		<button @click="handleClick" class="tw-text-white tw-bg-[#36CE9F] tw-w-full tw-h-[48px]">asdf</button>
	</div>
	</transition>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useServiceStore } from '~/stores/services'

const fullname = ref('')
const email = ref('')
const desc = ref('')
const serviceStore = useServiceStore();

const emit = defineEmits(['onClick'])



const sendSupportMessage = async() => {
	try {
		const res = await axios.post('https://zhervc-api.azurewebsites.net/api/Supportmessages', {
			fullName: fullname.value,
			email: email.value,
			message: desc.value
		},
		{
			headers: {
				'Content-Type': 'application/json'
			}
		}
	 )
	 serviceStore.toast.success('Сообщение отправлено')
	}catch(err) {
		console.log(err)
	}
}

const handleClick = async () => {
	await sendSupportMessage()
	emit('onClick')
}
</script>

<style scoped>

</style>