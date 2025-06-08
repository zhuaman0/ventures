<template>
  <div class="tw-p-4 sm:tw-p-6 md:tw-p-8 tw-w-full">
    <div class="tw-ml-2 sm:tw-ml-4 md:tw-ml-6 lg:tw-ml-20 tw-w-full tw-max-w-3xl md:tw-w-2/3 tw-bg-white tw-shadow-lg tw-p-6 sm:tw-p-8">
    <div class="tw-flex tw-items-center tw-h-full">
      <img
        v-if="productDetail?.logoPath"
        class="tw-mb-4 tw-w-[50px] tw-h-full"
        :src="getImage(productDetail.logoPath)"
        alt="Логотип"
      />
      <h1 class="tw-text-2xl sm:tw-text-3xl tw-ml-4 tw-font-bold tw-text-[#181236] tw-mb-6 sm:tw-mb-8">
        {{ productDetail?.fullName }}
      </h1>
    </div>

      <div class="tw-mb-6">
        <h2 class="tw-text-sm tw-text-[#9296A1] tw-mb-1">Описание</h2>
        <p class="tw-text-base sm:tw-text-[16px] tw-text-[#181236]">
          {{ productDetail?.description }}
        </p>
      </div>

      <div class="tw-mb-6">
        <h2 class="tw-text-sm tw-text-[#9296A1] tw-mb-1">Релевантные индустрии</h2>
        <ul class="tw-flex tw-flex-wrap">
          <li
            v-for="(item, index) in productDetail?.industries"
            :key="index"
            class="tw-border tw-border-violet-400 tw-text-[#181236] tw-text-[14px] tw-flex tw-mr-4 tw-mb-2 tw-px-3 tw-py-1"
          >
            {{ item }}
          </li>
        </ul>

      </div>
		 <div v-if="serviceStore.JWT_TOKEN" class="tw-mb-6">
            <h2 class="tw-text-sm tw-text-[#9296A1] tw-mb-1">Технологии и направления</h2>
            <ul class="tw-flex tw-flex-row">
                <li v-for="(item, index) in productDetail?.technologies" :key="index" class="tw-border tw-border-violet-400 tw-text-[#181236] tw-text-[14px] tw-flex tw-mr-4 tw-px-3 tw-py-1">
                {{ item }}
					 </li>
				</ul>
				<div class="tw-grid tw-gap-5 lg:tw-grid-cols-3 tw-grid-cols-1 tw-mb-[15px] tw-mt-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Стадия инвестирования</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ productDetail?.organizationName }}</p>
					   </div>
						<div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Электронная почта</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ productDetail?.publicEmail }}</p>
					   </div>
					   <div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Страна</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ productDetail?.countryName }}</p>
					   </div>
				</div>
				 <div class="tw-mb-[15px]">
					   <h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Ссылка на проект</h1>
					   <p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ productDetail?.website }}</p>
				</div>
            </div>

      <div class="tw-flex tw-justify-start tw-items-start">
        <button @click="messageInvestor" v-show="role !== 'Investor'" class="tw-bg-[#36CE9F] tw-text-white tw-text-[16px] tw-px-20 tw-py-3 hover:tw-opacity-90 tw-transition">
          Связаться
        </button>
      </div>
    </div>
    <ModalOffer @onClick="onClick" :targetId="productDetail?.id" v-if="showModal"/>
    <IsRegistered v-if="!serviceStore.JWT_TOKEN" class="tw-ml-2 sm:tw-ml-4 md:tw-ml-6 lg:tw-ml-20" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useServiceStore } from '~/stores/services'
const role = localStorage.getItem('role')
const showModal = ref(false)

interface TypeDetail {
  id: number
  fullName: string
  contactFullName: string
  publicEmail: string
  phoneNumber: string
  countryName: string
  website: string
  organizationName: string
  identificationNumber: string
  description: string
  investmentAmount: number
  hasStartupPilotExperience: boolean
  investsInStartups: boolean
  profilePhotoPath: string
  logoPath: string
  industries: string[]
  technologies: string[]
  innovationMethods: string[]
  developmentStages: string[]
  foundingYear?: number
  employeeCount?: number
}
const productDetail = ref<TypeDetail | null>(null)
const route = useRoute()
const serviceStore = useServiceStore()

const getDetailItem = async () => {
  try {
    const res = await axios.get<TypeDetail>(`https://zhervc-api.azurewebsites.net/api/Investor/${route.params.id}`)
    productDetail.value = res.data
    console.log('ID:', route.params.id)
    console.log('Detail:', res.data)
  } catch (err) {
    console.error('Ошибка получения данных:', err)
  }
}

const getImage = (path: string): string => {
  return `https://zhervc-api.azurewebsites.net${path}`
}

const getImagee = (logo: any) => {
	return `https://zhervc-api.azurewebsites.net/${logo}`
}
const messageInvestor = () => {
  showModal.value = true
}

const onClick = () => {
	showModal.value = false
}

onMounted(() => {
  getDetailItem()
})
</script>
