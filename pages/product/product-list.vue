<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
	  <RouteRouterPath :breadcrumbs="breadcrumbs" />
	  <h1 class="tw-font-bold tw-px-4 lg:tw-px-0 tw-text-[32px] tw-my-[15px]">{{ textOfindex }}</h1>
	  <span class="tw-font-[400] tw-px-4 lg:tw-px-0 tw-text-[16px] tw-text-[#767A87] tw-leading-[120%]">
		Всего {{ lenghtItems }} {{ textOfindex }}
	  </span>
  
	  <div class="tw-grid tw-grid-cols-1 sm:tw-grid-cols-4 tw-gap-4 tw-pt-7 tw-mb-10">
		<div class="tw-hidden sm:tw-block tw-bg-white tw-w-full tw-py-4 tw-px-6 tw-rounded-lg">
		  <h1 class="tw-font-[500] tw-text-[20px] tw-leading-[120%] tw-text-black tw-mb-6">Фильтр</h1>
  
		  <div class="tw-my-[20px]">
			<h2 class="tw-text-[#181123] tw-font-[500] tw-text-[16px] tw-mb-4">Индустрии</h2>
			<ul class="tw-space-y-3">
			  <li v-for="(item, index) in industries" :key="index" class="tw-flex tw-items-center">
				<input
				  :value="item.id"
				  v-model="selectedIndustries"
				  type="checkbox"
				  class="tw-w-4 tw-h-4 tw-text-[#228B6B] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[#228B6B]"
				>
				<label class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">
				  {{ item.name }}
				</label>
			  </li>
			</ul>
		  </div>
		  <div class="tw-my-[20px]">
			<h2 class="tw-text-[#181123] tw-font-[500] tw-text-[16px] tw-mb-4">Технологии</h2>
			<ul class="tw-space-y-3">
			  <li v-for="(item, index) in technologies" :key="index" class="tw-flex tw-items-center">
				<input
				  :value="item.id"
				  v-model="selectedTechnologies"
				  type="checkbox"
				  class="tw-w-4 tw-h-4 tw-text-[#228B6B] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[#228B6B]"
				>
				<label class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">
				  {{ item.name }}
				</label>
			  </li>
			</ul>
		  </div>
		  <div class="tw-my-[20px]">
			<h2 class="tw-text-[#181123] tw-font-[500] tw-text-[16px] tw-mb-4">Стадия проекта</h2>
			<ul class="tw-space-y-3">
			  <li v-for="(item, index) in developmentStages" :key="index" class="tw-flex tw-items-center">
				<input
				  :value="item.id"
				  v-model="selectedDevelopmentStages"
				  type="checkbox"
				  class="tw-w-4 tw-h-4 tw-text-[#228B6B] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[#228B6B]"
				>
				<label class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">
				  {{ item.name }}
				</label>
			  </li>
			</ul>
		  </div>
		  <div class="tw-my-[20px]">
			<h2 class="tw-text-[#181123] tw-font-[500] tw-text-[16px] tw-mb-4">Стадия инвестирования</h2>
			<ul class="tw-space-y-3">
			  <li v-for="(item, index) in innovationMethods" :key="index" class="tw-flex tw-items-center">
				<input
				  :value="item.id"
				  v-model="selectedInnovationMethods"
				  type="checkbox"
				  class="tw-w-4 tw-h-4 tw-text-[#228B6B] tw-bg-gray-100 tw-border-gray-300 tw-rounded focus:tw-ring-[#228B6B]"
				>
				<label class="tw-ml-2 tw-text-sm tw-font-medium tw-text-gray-900">
				  {{ item.name }}
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
			  v-model="searchQuery"
			  type="text"
			  placeholder="Поиск"
			  class="tw-w-full tw-mx-6 tw-h-[56px] focus:tw-outline-none tw-text-[16px] tw-text-[#767A87]" 
			/>
		  </div>
		  <DetailItem v-if="$route.query.type === 'Startup'" :products="filteredProducts" />
		  <InvestorItem :productss="filteredProductss" v-else-if="$route.query.type === 'Investor'"/>
		  <div v-if="filteredProducts.length === 0 && filteredProductss.length === 0" class="tw-w-full tw-flex tw-flex-col tw-items-center tw-mt-8 tw-justify-center tw-text-center">
			<img src="/assets/icons/loading/searchNotFound.svg" alt="">
			<h1 class="tw-text-[#767A87] tw-text-[16px] tw-font-[400]">По вашим запросам ничего не найдено</h1>
		  </div>
		  <IsRegistered v-if="!serviceStore.JWT_TOKEN"/>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed, watch } from 'vue'
  import axios from 'axios'
  import { useServiceStore } from '~/stores/services'
  
  definePageMeta({
	layout: 'default',
	name: 'detail',
  })
  
  const products = ref([])
  const productss = ref([])
  const industries = ref([])
  const technologies = ref([])
  const developmentStages = ref([])
  const innovationMethods = ref([])
  const selectedIndustries = ref([])
  const selectedTechnologies = ref([])
  const selectedDevelopmentStages = ref([])
  const selectedInnovationMethods = ref([])
  const searchQuery = ref('')
  const serviceStore = useServiceStore()
  const route = useRoute()
  
  const getProductsDetail = async () => {
	try {
	  const res = await axios.get('https://zhervc-api.azurewebsites.net/api/Startups')
	  products.value = res.data
	} catch (err) {
	  console.error(err)
	}
  }
  
  const getDetailItems = async () => {
	try {
	  const res = await axios.get('https://zhervc-api.azurewebsites.net/api/Investor', {
		headers: { Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}` }
	  })
	  productss.value = res.data
	} catch (err) {
	  console.log(err)
	}
  }
  
  const getFilterItems = async () => {
	try {
	  const [resIndustries, resTechnologies, resStages, resMethods] = await Promise.all([
		axios.get('https://zhervc-api.azurewebsites.net/api/Industries'),
		axios.get('https://zhervc-api.azurewebsites.net/api/Technologies'),
		axios.get('https://zhervc-api.azurewebsites.net/api/Developmentstages'),
		axios.get('https://zhervc-api.azurewebsites.net/api/Innovationmethods'),
	  ])
	  industries.value = resIndustries.data
	  technologies.value = resTechnologies.data
	  developmentStages.value = resStages.data
	  innovationMethods.value = resMethods.data
	} catch (err) {
	  console.log(err)
	}
  }
  
  const lenghtItems = computed(() => {
	if (route.query.type === 'Startup') return products.value.length
	if (route.query.type === 'Investor') return productss.value.length
	return 0
  })
  
  const filteredProducts = computed(() => {
	return products.value.filter(product => product.publicName.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })
  
  const filteredProductss = computed(() => {
	return productss.value.filter(product => product.fullName.toLowerCase().includes(searchQuery.value.toLowerCase()))
  })
  
  watch(
	[selectedIndustries, selectedTechnologies, selectedDevelopmentStages, selectedInnovationMethods],
	async () => {
	  const params = new URLSearchParams()
  
	  if (selectedIndustries.value.length) {
		selectedIndustries.value.forEach(id => params.append('industryIds', id))
	  }
  
	  if (selectedTechnologies.value.length) {
		selectedTechnologies.value.forEach(id => params.append('technologyIds', id))
	  }
  
	  if (selectedDevelopmentStages.value.length) {
		selectedDevelopmentStages.value.forEach(id => params.append('developmentStageIds', id))
	  }
  
	  if (selectedInnovationMethods.value.length) {
		selectedInnovationMethods.value.forEach(id => params.append('innovationMethodIds', id))
	  }
  
	  const url = `https://zhervc-api.azurewebsites.net/api/Startups?${params.toString()}`
	  const urls = `https://zhervc-api.azurewebsites.net/api/Investor?${params.toString()}`
  
	  try {
		const response = await axios.get(url)
		const res = await axios.get(urls)
		products.value = response.data
		productss.value = res.data
	  } catch (error) {
		console.error('Ошибка при загрузке данных:', error)
	  }
	},
	{ deep: true }
  )
  
  const textOfindex = computed(() => {
	if (route.query.type === 'Startup') return 'Стартап'
	if (route.query.type === 'Investor') return 'Инвестор'
	return ''
  })
  
  onMounted(() => {
	getProductsDetail()
	getFilterItems()
	getDetailItems()
  })
  </script>
  
  <style scoped>
  input[type="checkbox"]:checked {
	background-color: #228B6B;
	border-color: #228B6B;
  }
  </style>
  