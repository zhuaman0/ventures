<script setup lang="ts">
import { useToast } from 'vue-toastification';

const { locales, setLocale } = useI18n();

// onMounted(() => {
// 	const toast =  useToast();
// 	toast.success('i have solve this')
// })
</script>

<template>
	<div class="tw-my-10">
		<MainSectionHeader/>
		<MainCategoriesSection/>	 
		<MainStartupOpportunities/>
		<MainStartupCriteria/>
		<MainFaqSection/>	
	</div>
	<!-- <div>
		<h1 class="tw-text-center">qewr</h1>
		<h1 class="muha">adf</h1>
		<button v-for="locale in locales" @click="setLocale(locale.code)">
			{{ locale.name }}
		</button>
		<h1>{{ $t('welcome') }}</h1>
	</div> -->
</template>

<style lang="scss">
</style>