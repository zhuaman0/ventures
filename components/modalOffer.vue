<template>
	<div
	class="tw-flex tw-fixed tw-items-center tw-justify-center tw-z-[100] tw-bg-[#00000069] tw-left-0 tw-top-0 tw-w-full tw-h-full"
	>
	<transition
	enter-active-class="animite_animated animate_zoomIn animate_faster"
	leave-active-class="animite_animated animate_fadeOut animate_faster"
	appear
	>
	<div class="tw-max-w-[390px] tw-min-w-[390px] tw-max-h-max tw-rounded-[12px] tw-bg-white tw-px-4 tw-pt-[10px] tw-pb-4">
		<h1 class="tw-mt-4 tw-text-[#181236] tw-font-bold tw-text-center tw-text-[20px]">
			Связаться
		</h1>
		<div class="tw-mb-4">
				<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="message">Собщение</label>
				<v-text-field
				     v-model="message"
				     class="tw-w-full tw-text-black tw-mt-2 tw-border-[#D2D4DB] tw-border-[1px]"
				     id="message"
                 placeholder="Собщение"
                 variant="outlined"
					  autocomplete="off"
            ></v-text-field>
		</div>
		<button @click="clickButton" class="tw-text-white tw-bg-[#36CE9F] tw-w-full tw-h-[48px]">Отправить</button>
	</div>
	</transition>
	</div>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { useServiceStore } from '~/stores/services'

const message = ref('')
const token = ref(localStorage.getItem('JWT_TOKEN'))
const serviceStore = useServiceStore();
const emit = defineEmits(['onClick'])
const props = defineProps<{
	targetId: any
}>()

const sendMessage = async() => {
	try {
		const res = await axios.post('https://zhervc-api.azurewebsites.net/api/Offers', {
			targetId: props.targetId,
			message: message.value
		},{
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token.value}`
			}
		})
		serviceStore.toast.success('Отправлено')
	}catch(err) {
		console.log(err)
	}
}

const clickButton = () => {
	sendMessage()
	emit('onClick')
}
</script>

<style scoped>

</style>	