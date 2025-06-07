<template>
	<div>
	   <div class="tw-bg-white tw-w-full tw-py-4 tw-px-4 tw-flex tw-items-center tw-max-w-[900px] tw-rounded-lg tw-mt-4">
	   	<div class="tw-mr-4">
	   		<h1 class="tw-font-[600] tw-text-[24px] tw-mb-4">
	   			Полный список участников будет доступен после регистрации на площадке
	   		</h1>
	   		<button @click="$router.push('/auth/login')" class="tw-bg-[#228B6B] hover:tw-bg-[#1c7a5d] tw-text-white tw-py-[16px] tw-px-[72px] tw-rounded tw-transition">
	   			Присоединиться
	   		</button>
	   	</div>
	   	<img src="/assets/img/access.png" alt="" class="tw-hidden md:tw-block" />
	   </div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>