<template>
  <div>
	<NuxtLayout>
		<NuxtPage/>
	</NuxtLayout>

	<transition enter-active-class="animate__animated animated__fadeIn animate__fast"
	leave-active-class="animate__animated animate__fadeOut animate__fast"
	>
	<ModalWindow 
	v-if="serviceStore.modal.show"
	:type="serviceStore.modal.type"
	:header="serviceStore.modal.header"
	:buttonText="serviceStore.modal.buttonText"
	@onClick="serviceStore.modal.onClick"
	></ModalWindow>
	</transition>
  </div>
</template>

<script lang="ts" setup>
import { useServiceStore } from './stores/services';
const serviceStore = useServiceStore();
</script>
