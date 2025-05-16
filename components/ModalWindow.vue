<template>
	<div
	class="tw-flex tw-fixed tw-items-center tw-justify-center tw-z-[100] tw-bg-[#00000069] tw-left-0 tw-top-0 tw-w-full tw-h-full"
	>
	<transition
	enter-active-class="animite_animated animate_zoomIn animate_faster"
	leave-active-class="animite_animated animate_fadeOut animate_faster"
	appear
	>
	<div class="tw-max-w-[390px] tw-min-w-[390px] tw-max-h-max tw-rounded-[12px] tw-bg-white tw-px-4 tw-pt-[40px] tw-pb-4">
		<div class="tw-flex tw-justify-center">
			<img src="/assets/icons/type/success.svg" alt="">
		</div>
		<h1 class="tw-mt-4 tw-mb-6 tw-text-[#181236] tw-font-bold tw-text-center tw-text-[20px]">
			{{ header }}
		</h1>
		<button @click="$emit('onClick')" class="tw-text-white tw-bg-[#36CE9F] tw-w-full tw-h-[48px]">{{ buttonText }}</button>
	</div>
	</transition>
	</div>
</template>

<script lang="ts">
export type ModalTypes = "succes" | "danger" | "warning";
export default defineComponent({
	props: {
		type: {
			type: String,
			required: false,
			default: "success"
		},
		header: {
			type: String,
			required: true
		},
		buttonText: {
			type: String,
			required: true
		}
	}
})
</script>

<style scoped>

</style>