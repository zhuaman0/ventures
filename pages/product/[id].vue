<template>
    <div class="tw-p-4 sm:tw-p-6 md:tw-p-8 tw-w-full">
        <div class="tw-ml-2 sm:tw-ml-4 md:tw-ml-6 lg:tw-ml-20 tw-mr-2 tw-w-full tw-max-w-3xl md:tw-w-2/3 tw-bg-white tw-shadow-lg tw-p-6 sm:tw-p-8">
            <h1 class="tw-text-2xl sm:tw-text-3xl tw-font-bold tw-text-[#181236] tw-mb-6 sm:tw-mb-8">
					{{ productDetail?.publicName }}
            </h1>
    
            <img class="tw-mb-4 tw-w-[163px] tw-h-full" v-if="productDetail?.logoPath" :src="getImage" alt="">
    
            <div class="tw-mb-6">
            <h2 class="tw-text-sm tw-text-[#9296A1] tw-mb-1">Описание</h2>
            <p class="tw-text-base sm:tw-text-[16px] tw-text-[#181236]">
                {{ productDetail?.description }}
            </p>
            </div>
			  <div class="tw-grid sm:tw-grid-cols-2 tw-gap-4 tw-mb-4">
            <div>
                <h2 class="tw-text-sm tw-text-[#9296A1] tw-mb-1">Год основания</h2>
                <p class="tw-text-[#181236]">{{ productDetail?.foundingYear }}</p>
            </div>
            <div>
                <h2 class="tw-text-sm tw-text-[#9296A1] tw-mb-1">Количество сотрудников</h2>
                <a
                class="tw-text-[#181236] hover:tw-underline"
                target="_blank"
                >
                {{ productDetail?.employeeCount }}
                </a>
            </div>
            </div>
			   <div v-if="serviceStore.JWT_TOKEN" class="tw-mb-6">
            <h2 class="tw-text-sm tw-text-[#9296A1] tw-mb-1">Технологии и направления</h2>
            <ul class="tw-flex tw-flex-row">
                <li v-for="(item, index) in productDetail?.technologies" :key="index" class="tw-border tw-border-violet-400 tw-text-[#181236] tw-text-[14px] tw-flex tw-mr-4 tw-px-3 tw-py-1">
                {{ item }}
					 </li>
				</ul>
				<div class="tw-grid tw-gap-5 lg:tw-grid-cols-3 tw-grid-cols-1 tw-mt-5 tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Стадия инвестирования</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ productDetail?.organizationName }}</p>
					   </div>
						<div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Стадия проекта</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ productDetail?.developmentStage }}</p>
					   </div>
					   <div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Модель продаж</h1>
              <ul>
                <li v-for="(item, index) in productDetail?.salesModels" :key="index" class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">
                  {{ item }}
                </li>
              </ul>
					   </div>
				</div>
				 <div class="tw-mb-[15px]">
					   <h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Ссылка на проект</h1>
					   <p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ productDetail?.website }}</p>
				</div>
					<div class="">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Презентация</h1>
						<a target="_blank" :href="getImagee(productDetail?.presentationPath)">
							<img src="/assets/icons/pdf.png" alt="">
						</a>
					</div>
            </div>
    
            <div @click="offerStartup" class="tw-flex tw-justify-start tw-items-start">
            <button v-show="role !== 'Startup'" class="tw-bg-[#36CE9F] tw-text-white tw-text-[16px] tw-px-20 tw-py-3 hover:tw-opacity-90 tw-transition">
                Связаться
            </button>
            </div>
        </div>
		  <ModalOffer @onClick="onClick" :targetId="productDetail?.id" v-if="showModal"/>
		  <IsRegistered v-if="!serviceStore.JWT_TOKEN" class="tw-ml-2 sm:tw-ml-4 md:tw-ml-6 lg:tw-ml-20"/>
    </div>
</template>
    

<script setup lang="ts">
import { ModalOffer } from '#components'
import axios from 'axios'
import { useServiceStore } from '~/stores/services'
const route = useRoute()
const productDetail = ref<typeDetail>()
const id = route.params.id
const serviceStore = useServiceStore();
const showModal = ref(false)
const role = localStorage.getItem('role')

interface typeDetail  {
  "id": 0,
  "publicName": "string",
  "contactFullName": "string",
  "publicEmail": "string",
  "phoneNumber": "string",
  "website": "string",
  "organizationName": "string",
  "identificationNumber": "string",
  "foundingYear": 0,
  "countryName": "string",
  "employeeCount": 0,
  "description": "string",
  "developmentStage": "string",
  "investmentStage": "string",
  "hasSales": true,
  "activelyLookingForInvestment": true,
  "totalPreviousInvestment": 0,
  "investorList": "string",
  "logoPath": "string",
  "presentationPath": "string",
  "industries": [
    "string"
  ],
  "technologies": [
    "string"
  ],
  "businessModels": [
    "string"
  ],
  "salesModels": [
    "string"
  ],
  "targetCountries": [
    "string"
  ]
}

const getDetailItem = async() => {
	try {
		const res = await axios.get(`https://zhervc-api.azurewebsites.net/api/Startups/${route.params.id}`)
		productDetail.value = res.data
		console.log(res.data)
		console.log(id)
	}catch(err) {
		console.log(err)
		console.log('Solve problem')
	}
}

const getImage = computed(() => {
	return `https://zhervc-api.azurewebsites.net/${productDetail.value?.logoPath}`
})

const getImagee = (logo: any) => {
	return `https://zhervc-api.azurewebsites.net/${logo}`
}

const offerStartup = () => {
	showModal.value = true
}

const onClick = () => {
	showModal.value = false
}

onMounted(() => {
	getDetailItem()
})
</script>