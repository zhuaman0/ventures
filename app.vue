<template>
  <div>
	<NuxtLayout>
		<NuxtPage/>
	</NuxtLayout>

	<transition enter-active-class="animate__animated animated__fadeIn animate__fast"
	leave-active-class="animate__animated animate__fadeOut animate__fast"
	>
	<ModalWindow></ModalWindow>
	</transition>
  </div>
</template>
