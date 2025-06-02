<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
		<RouteRouterPath :breadcrumbs="breadcrumbs" />
		<h1 class="tw-font-bold tw-text-[32px] tw-my-[15px]">Стартапы</h1>
		<span class="tw-font-[400] tw-text-[16px] tw-text-[#767A87] tw-leading-[120%]">
			Всего {{ filteredProducts.length }} стартапов
		</span>
	
		<div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-4 tw-gap-4 tw-pt-7 tw-mb-10">
			<div class="tw-hidden sm:tw-block tw-bg-white tw-w-full tw-py-4 tw-px-6 tw-rounded-lg">
			<h1 class="tw-font-[500] tw-text-[20px] tw-leading-[120%] tw-text-black tw-mb-6">Фильтр</h1>
	
			<div class="tw-my-[20px]">
				<h2 class="tw-text-[#181123] tw-font-[500] tw-text-[16px] tw-mb-4">Индустрии</h2>
				<ul class="tw-space-y-3">
				<li v-for="industry in industries" :key="industry.id" class="tw-flex tw-items-center">
					<input 
					type="checkbox" 
					:id="'industry-' + industry.id" 
					v-model="selectedIndustries" 
					:value="industry.name" 
					class="tw-w-4 tw-h-4 tw-text-[#228B6B] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[#228B6B]"
					>
					<label :for="'industry-' + industry.id" class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">
					{{ industry.name }}
					</label>
				</li>
				</ul>
			</div>
	
			<div class="tw-my-[20px]">
				<h2 class="tw-text-[#181123] tw-font-[500] tw-text-[16px] tw-mb-4">Технологии</h2>
				<ul class="tw-space-y-3">
				<li v-for="tech in technologies" :key="tech.id" class="tw-flex tw-items-center">
					<input 
					type="checkbox" 
					:id="'tech-' + tech.id" 
					v-model="selectedTechnologies" 
					:value="tech.name" 
					class="tw-w-4 tw-h-4 tw-text-[#228B6B] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[#228B6B]"
					>
					<label :for="'tech-' + tech.id" class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">
					{{ tech.name }}
					</label>
				</li>
				</ul>
			</div>
	
			<div class="tw-my-[20px]">
				<h2 class="tw-text-[#181123] tw-font-[500] tw-text-[16px] tw-mb-4">Источник</h2>
				<ul class="tw-space-y-3">
				<li v-for="source in sourceInfoes" :key="source.id" class="tw-flex tw-items-center">
					<input 
					type="checkbox" 
					:id="'source-' + source.id" 
					v-model="selectedSourceInfoes" 
					:value="source.name" 
					class="tw-w-4 tw-h-4 tw-text-[#228B6B] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[#228B6B]"
					>
					<label :for="'source-' + source.id" class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">
					{{ source.name }}
					</label>
				</li>
				</ul>
			</div>
			</div>
	
			<div class="tw-col-span-3">
			<div class="tw-flex tw-items-center tw-bg-white tw-px-4 tw-py-2 tw-mb-[20px] tw-rounded-lg tw-cursor-pointer">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="tw-mr-2">
				<path fill-rule="evenodd" clip-rule="evenodd"
					d="M3.75 10.5C3.75 6.77208 6.77208 3.75 10.5 3.75C14.2279 3.75 17.25 6.77208 17.25 10.5C17.25 14.2279 14.2279 17.25 10.5 17.25C6.77208 17.25 3.75 14.2279 3.75 10.5ZM10.5 2.25C5.94365 2.25 2.25 5.94365 2.25 10.5C2.25 15.0563 5.94365 18.75 10.5 18.75C12.5082 18.75 14.3488 18.0325 15.7794 16.8398L20.4699 21.5304C20.7628 21.8233 21.2377 21.8233 21.5306 21.5304C21.8235 21.2375 21.8235 20.7626 21.5306 20.4697L16.8401 15.7792C18.0326 14.3486 18.75 12.5081 18.75 10.5C18.75 5.94365 15.0563 2.25 10.5 2.25Z"
					fill="#919191" />
				</svg>
				<input 
				type="text" 
				placeholder="Поиск"
				class="tw-w-full tw-h-[56px] focus:tw-outline-none tw-text-[16px] tw-text-[#767A87]" 
				/>
			</div>
	
			<div class="tw-mb-[20px] tw-flex tw-flex-wrap tw-gap-2">
				<div 
				v-for="product in filteredProducts" 
				:key="product.id"
				class="tw-bg-[#E7E4FF] tw-flex tw-items-center tw-py-[4px] tw-pr-[8px] tw-pl-[8px] tw-rounded"
				>
				<span class="tw-text-sm">{{ product.name }}</span>
				</div>
			</div>
	
			<DetailItem :products="filteredProducts" />
	
			<div class="tw-bg-white tw-w-full tw-py-4 tw-px-4 tw-flex tw-items-center tw-rounded-lg tw-mt-4">
				<div class="tw-mr-4">
				<h1 class="tw-font-[600] tw-text-[24px] tw-mb-4">
					Полный список участников будет доступен после регистрации на площадке
				</h1>
				<button class="tw-bg-[#228B6B] hover:tw-bg-[#1c7a5d] tw-text-white tw-py-[16px] tw-px-[72px] tw-rounded tw-transition">
					Присоединиться
				</button>
				</div>
				<img src="/assets/img/access.png" alt="" class="tw-hidden md:tw-block" />
			</div>
			</div>
		</div>
		</div>
	</template>
	
	<script setup lang="ts">
	import { ref, onMounted, computed } from 'vue'
	import axios from 'axios'
	
	definePageMeta({
		layout: 'default',
		name: 'detail',
	})
	
	const products = ref([])
	
	const breadcrumbs = [
		{ title: 'Главная', disabled: false, href: '/' },
		{ title: 'Найти стартап', disabled: true, href: '/auth/login/' },
	]
	
	const industries = ref([])
	const selectedIndustries = ref([])
	
	const technologies = ref([])
	const selectedTechnologies = ref([])
	
	const sourceInfoes = ref([])
	const selectedSourceInfoes = ref([])
	
	const filteredProducts = computed(() =>
		products.value.filter(product => {
		if (
			selectedIndustries.value.length &&
			!selectedIndustries.value.includes(product.industryName)
		) return false
	
		if (
			selectedTechnologies.value.length &&
			(!product.technologies ||
			!selectedTechnologies.value.some(t => product.technologies.includes(t)))
		) return false
	
		if (
			selectedSourceInfoes.value.length &&
			(!product.sourceInfoes ||
			!selectedSourceInfoes.value.some(s => product.sourceInfoes.includes(s)))
		) return false
	
		return true
		})
	)
	
	const getProductsDetail = async () => {
		try {
		const res = await axios.get('https://zhervc-api.azurewebsites.net/api/Startups')
		products.value = res.data
		} catch (err) {
		console.error(err)
		}
	}
	
	const getAllFilters = async () => {
		try {
		const [techRes, sourceRes, industryRes] = await Promise.all([
			axios.get('https://zhervc-api.azurewebsites.net/api/Technologies'),
			axios.get('https://zhervc-api.azurewebsites.net/api/Sourceinfoes'),
			axios.get('https://zhervc-api.azurewebsites.net/api/Industries'),
		])
	
		industries.value = industryRes.data
		technologies.value = techRes.data
		sourceInfoes.value = sourceRes.data
		} catch (err) {
		console.error(err)
		}
	}
	
	onMounted(() => {
		getProductsDetail()
		getAllFilters()
	})
	</script>
	
<style scoped>
	input[type="checkbox"]:checked {
		background-color: #228B6B;
		border-color: #228B6B;
	}
</style>