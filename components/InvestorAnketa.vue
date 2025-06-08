<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
		<h1 class="tw-font-bold tw-text-[32px] tw-my-[15px]">Моя анкета</h1>
		<div class="">
			<div class="">
				<div class="tw-bg-white tw-w-full tw-flex tw-items-start tw-justify-between tw-px-4 tw-py-6 tw-mb-4">
					<div class="tw-flex tw-items-start">
						<img class="tw-w-[60px] tw-h-[60px]" :src="getImagee(investorDetail.logoPath)" alt="">
						<div class="tw-ml-[20px]">
							<h1 class="tw-text-[#181236] tw-font-bold tw-text-[20px] tw-mb-2">{{ investorDetail.fullName }}</h1>
							<div class="tw-flex tw-items-center">
								<img src="/assets/icons/clock.svg" alt="">
								<p class="tw-text-[#181236] tw-font-[400] tw-text-[16px] tw-ml-2">На проверке</p>
							</div>
						</div>
					</div>
					<div>
						<img src="/assets/icons/edit.svg" alt="">
					</div>
				</div>
				<div class="tw-bg-white tw-w-full tw-px-4 tw-py-6 tw-mb-4">
					<div class="tw-flex tw-items-center tw-justify-between">
						<h1 class="tw-font-bold tw-text-[20px] tw-my-[15px]">О продукте</h1>
						<img src="/assets/icons/edit.svg" alt="">
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Описание</h1>
						<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.description }}</p>
					</div>
					<div class="tw-flex tw-items-center tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Стадия развития</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.investmentAmount }}</p>
					   </div>
						<div class="tw-ml-[20px]">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Организации</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.organizationName }}</p>
					   </div>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Индустрии</h1>
						<ul v-for="(item, index) in investorDetail.industries" :key="index" class="tw-mt-[7px]">
							<li class="tw-border-[1px] tw-border-[#B9B1FC] tw-py-[4px] tw-px-[16px] tw-w-[200px]">
								{{ item }}
							</li>
						</ul>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Технологии</h1>
						<ul v-for="(item, index) in investorDetail.technologies" :key="index" class="tw-mt-[7px]">
							<li class="tw-border-[1px] tw-border-[#B9B1FC] tw-py-[4px] tw-px-[16px] tw-w-[200px]">
								AdTech & MarTech
							</li>
						</ul>
					</div>
					<div class="tw-flex tw-items-center tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Лого</h1>
					   	<a :href="getImagee(investorDetail.logoPath)">
								<img class="tw-w-full tw-h-[48px] tw-mb-2" :src="getImagee(investorDetail.logoPath)" alt="">
							</a>
					   </div>
						<div class="tw-ml-[20px]">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Презентация</h1>
					   	<a target="_blank" :href="getImagee(investorDetail.presentationPath)">
								<img src="/assets/icons/pdf.png" alt="">
							</a>
					   </div>
					</div>
				</div>
				<div class="tw-bg-white tw-w-full tw-px-4 tw-py-6 tw-mb-4">
					<div class="tw-flex tw-items-center tw-justify-between">
						<h1 class="tw-font-bold tw-text-[20px] tw-my-[15px]">О компании</h1>
						<img src="/assets/icons/edit.svg" alt="">
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Публичное название</h1>
						<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.publicName }}</p>
					</div>
					<div class="tw-flex tw-items-center tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Наименование организации</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.organizationName }}</p>
					   </div>
						<div class="tw-ml-[20px]">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Идентификационный номер</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.identificationNumber }}</p>
					   </div>
					</div>
					<div class="tw-flex tw-items-center tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Страна регистрации</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.countryName }}</p>
					   </div>
					</div>
				<div class="tw-flex tw-items-center tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Контактное лицо</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.contactFullName }}</p>
					   </div>
						<div class="tw-ml-[20px]">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Номер телефона</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.phoneNumber }}</p>
					   </div>
						<div class="tw-ml-[20px]">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Электронная почта</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.publicEmail }}</p>
					   </div>
					</div>
				</div>
			</div>
			<div class="tw-grid tw-grid-cols-2 tw-gap-2">
			<h1 class="tw-font-bold tw-text-[32px] tw-my-[15px]">Мои действия</h1>
					<div>
						<h1 class="tw-text-black tw-font-bold tw-text-[25px]">Полученное предложение</h1>
						<div class="tw-bg-[#228B6B] tw-py-3 tw-px-3 tw-max-h-[144px] tw-mt-4">
				         <div class="tw-flex tw-items-start">
				         	<ul class="tw-ml-[10px]">
									<li v-for="(item, index) in startUpRecieved" :key="index">
										<div>
											<span class="tw-text-white tw-text-[15px]">Имя инвестора</span>
											<h1 class="tw-text-white tw-text-[20px] tw-font-[400]">{{ item.investorName }}</h1>
										</div>
				         			<p class="tw-text-[16px] tw-text-white">{{ item.message }}</p>
										<p class="tw-text-[16px] tw-text-white">{{ item.startupName }}</p>
										<div>
											<p class="tw-text-[16px] tw-text-white">{{ item.status }}</p>
											<button  class="tw-bg-red tw-text-red-500"  @click="acceptedStartup(item.id)">Accepted</button>
											<button  class="tw-bg-red tw-text-blue-500"  @click="deleteStartup(item.id)">rejected</button>
										</div>
									</li>
								</ul>
				         </div>
			      </div>
					</div>
					<div>
						<h1 class="tw-text-black tw-font-bold tw-text-[25px]">Отправленные предложения</h1>
						<div class="tw-bg-[#228B6B] tw-py-3 tw-px-3 tw-max-h-[144px] tw-mt-4">
				         <div class="tw-flex tw-items-start">
				         	<ul class="tw-ml-[10px]">
									<li v-for="(item, index) in startUpSent" :key="index">
										<div>
											<span class="tw-text-white tw-text-[15px]">Имя инвестора</span>
											<h1 class="tw-text-white tw-text-[20px] tw-font-[400]">{{ item.investorName }}</h1>
										</div>
				         			<p class="tw-text-[16px] tw-text-white">{{ item.message }}</p>
										<p class="tw-text-[16px] tw-text-white">{{ item.startupName }}</p>
										<p class="tw-text-[16px] tw-text-white">{{ item.status }}</p>
									</li>
								</ul>
				         </div>
			      </div>
					</div>
				</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'

definePageMeta({
	middleware: 'admin'
})

const investorDetail = ref<any>([])
const token = localStorage.getItem('JWT_TOKEN')

const getInvestorDetail = async() => {
	try {
		const res = await axios.get('https://zhervc-api.azurewebsites.net/api/Investor/me', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		investorDetail.value = res.data
		console.log(res.data)
	}catch(err) {
		console.log(err)
	}
}

const items = ref<any>([])
const getRecieved = async() => {
	try {
		const res = await axios.get('https://zhervc-api.azurewebsites.net/api/Offers/sent', {
			headers: {
				'Authorization': `Bearer ${token}`
			}
		})
		items.value = res.data
		console.log(res.data)
	}catch(err) {
		console.log(err)
	}
}



const getImagee = (path: string) => {
	return `https://zhervc-api.azurewebsites.net/${path}`
}

const startUpRecieved = ref<any>([])
const getStartupRecieved = async() =>{ 
	try {
		const res = await axios.get('https://zhervc-api.azurewebsites.net/api/Offers/received', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		startUpRecieved.value = res.data
		console.log(res.data)
	}catch(err) {
		console.log(err)
	}
}
const startUpSent = ref<any>([])
const getStartupSent = async() =>{ 
	try {
		const res = await axios.get('https://zhervc-api.azurewebsites.net/api/Offers/sent', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		startUpSent.value = res.data
		console.log(res.data)
	}catch(err) {
		console.log(err)
	}
}

const acceptedStartup = async(number: string) => {
	try {
		const res = await axios.put(`https://zhervc-api.azurewebsites.net/api/Offers/${number}`, {
			status: 'Accepted'
		},{
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		console.log(res.data)
		window.location.reload()
	}catch(err) {
		console.log(err)
	}
}

const deleteStartup = async(number: string) => {
	try {
		const res = await axios.put(`https://zhervc-api.azurewebsites.net/api/Offers/${number}`, {
			status: 'Rejected'
		},{
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		console.log(res.data)
		window.location.reload()
	}catch(err) {
		console.log(err)
	}
}

onMounted(() => {
	getInvestorDetail(),
	getRecieved(),
	getStartupRecieved(),
	getStartupSent()
})
</script>

<style scoped>

</style>