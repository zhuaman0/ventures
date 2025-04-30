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
		<h1 class="tw-mt-4 tw-mb-2 tw-text-[#181236] tw-font-bold tw-text-center tw-text-[20px]">
			Ваше обращение успешно отправлена!
		</h1>
	</div>
	</transition>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>