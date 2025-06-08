<template>
	<div>
	   <div class="tw-bg-white tw-w-full tw-py-4 tw-px-4 tw-flex tw-items-center tw-max-w-[900px] tw-rounded-lg tw-mt-4">
	   	<div class="tw-mr-4">
	   		<h1 class="tw-font-[600] lg:tw-text-[20px] tw-text-[14px] tw-mb-4">
	   			Полный список участников будет доступен после регистрации на площадке
	   		</h1>
	   		<button @click="$router.push('/auth/login')" class="tw-bg-[#36CE9F] hover:tw-bg-[#228B6B] tw-text-white lg:tw-py-[16px] tw-text-sm lg:tw-text-[15px] lg:tw-px-[72px] tw-py-[5px] tw-px-[10px] tw-rounded tw-transition">
	   			Присоединиться
	   		</button>
	   	</div>
	   	<img src="/assets/img/access.png" alt="" class="tw-hidden md:tw-block tw-ml-8" />
	   </div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>