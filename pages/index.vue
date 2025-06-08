<script setup lang="ts">
import axios from 'axios';
const items = ref<any>([])
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
</template>

<style lang="scss">
</style>