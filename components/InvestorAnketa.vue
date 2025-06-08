<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
		<h1 class="tw-font-bold lg:tw-text-[32px] tw-text-[20px] lg:tw-ml-0 tw-ml-5 tw-my-[15px]">Моя анкета</h1>
		<div class="">
			<div class="">
				<div class="tw-bg-white tw-w-full tw-flex tw-items-start tw-justify-between tw-px-4 tw-py-6 tw-mb-4">
					<div class="tw-flex tw-items-start">
						<img class="tw-w-[60px] tw-h-[60px]" :src="getImagee(investorDetail.logoPath)" alt="">
						<div class="tw-ml-[20px]">
							<h1 class="tw-text-[#181236] tw-font-bold tw-text-[20px] tw-mb-2">{{ investorDetail.fullName }}</h1>
							<h1 class="tw-text-[#181236]  tw-text-[15px] tw-mb-2">Ангел инвестор</h1>
						</div>
					</div>
				</div>
				<div class="tw-bg-white tw-w-full tw-px-4 tw-py-6 tw-mb-4">
					<div class="tw-flex tw-items-center tw-justify-between">
						<h1 class="tw-font-bold tw-text-[20px] tw-my-[15px]">О продукте</h1>
					</div>
					<div class="tw-grid tw-gap-5 lg:tw-grid-cols-3 tw-grid-cols-1 tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Наименование организации</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.organizationName }}</p>
					   </div>
						<div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Страна регистрации</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.countryName }}</p>
					   </div>
						<div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Идентификационный номер</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.identificationNumber }}</p>
					   </div>
					</div>
					<div class="tw-grid tw-gap-5 lg:tw-grid-cols-3 tw-grid-cols-1 tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Контактное лицо</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.contactFullName }}</p>
					   </div>
						<div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Номер телефона</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.phoneNumber }}</p>
					   </div>
						<div class="">
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Электронная почта</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.publicEmail }}</p>
					   </div>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Описание</h1>
						<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.description }}</p>
					</div>
					<div class="tw-grid tw-gap-5 lg:tw-grid-cols-2 tw-grid-cols-1 tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Ссылка на проект</h1>
					   	<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.website }}</p>
					   </div>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Индустрии</h1>
						<ul class="tw-mt-[7px] tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-items-cente">
							<li v-for="(item, index) in investorDetail.industries" :key="index" class="tw-border-[1px] lg:tw-mb-0 tw-mb-2 tw-mr-2 tw-border-[#B9B1FC] tw-py-[4px] tw-px-[16px] tw-w-full">
								{{ item }}
							</li>
						</ul>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Технологии</h1>
						<ul class="tw-mt-[7px] tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-items-cente">
							<li v-for="(item, index) in investorDetail.technologies" :key="index" class="tw-border-[1px] lg:tw-mb-0 tw-mb-2 tw-border-[#B9B1FC] tw-mr-2 tw-py-[4px] tw-px-[16px] tw-w-[200px]">
								{{ item }}
							</li>
						</ul>
					</div>
					<div class="tw-flex tw-items-center tw-mb-[15px]">
					   <div>
					   	<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Лого</h1>
					   	<a :href="getImagee(investorDetail.logoPath)">
								<img class="tw-w-full tw-h-[48px] tw-mb-2" :src="getImagee(investorDetail.profilePhotoPath)" alt="">
							</a>
					   </div>
					</div>
				</div>
				<div class="tw-bg-white tw-w-full tw-px-4 tw-py-6 tw-mb-4">
					<div class="tw-flex tw-items-center tw-justify-between">
						<h1 class="tw-font-bold tw-text-[20px] tw-my-[15px]">О компании</h1>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Размер инвестиционных средств</h1>
						<p class="tw-text-[#181236] tw-text-[16px] tw-font-[400] tw-leading-[20px]">{{ investorDetail.investmentAmount }}</p>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Методы работы с инновациями</h1>
						<ul class="tw-mt-[7px] tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-items-cente">
							<li v-for="(item, index) in investorDetail.innovationMethods" :key="index" class="tw-border-[1px] lg:tw-mb-0 tw-mb-2 tw-mr-2 tw-border-[#B9B1FC] tw-py-[4px] tw-px-[16px] tw-w-full">
								{{ item }}
							</li>
						</ul>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Релевантные стадии развития</h1>
						<ul class="tw-mt-[7px] tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-items-cente">
							<li v-for="(item, index) in investorDetail.developmentStages" :key="index" class="tw-border-[1px] lg:tw-mb-0 tw-mb-2 tw-mr-2 tw-border-[#B9B1FC] tw-py-[4px] tw-px-[16px] tw-w-full">
								{{ item }}
							</li>
						</ul>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Релевантные индустрии</h1>
						<ul class="tw-mt-[7px] tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-items-cente">
							<li v-for="(item, index) in investorDetail.industries" :key="index" class="tw-border-[1px] lg:tw-mb-0 tw-mb-2 tw-mr-2 tw-border-[#B9B1FC] tw-py-[4px] tw-px-[16px] tw-w-full">
								{{ item }}
							</li>
						</ul>
					</div>
					<div class="tw-mb-[15px]">
						<h1 class="tw-text-[#9296A1] tw-text-[14px] tw-font-[400] tw-leading-[20px] tw-mb-[2px]">Релевантные технологии</h1>
						<ul class="tw-mt-[7px] tw-flex tw-flex-wrap lg:tw-flex-nowrap tw-items-cente">
							<li v-for="(item, index) in investorDetail.technologies" :key="index" class="tw-border-[1px] lg:tw-mb-0 tw-mb-2 tw-mr-2 tw-border-[#B9B1FC] tw-py-[4px] tw-px-[16px] tw-w-full">
								{{ item }}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div>
				<h1 class="tw-font-bold lg:tw-text-[32px] tw-text-[20px] lg:tw-ml-0 tw-ml-5 tw-my-[15px]">Мои действия</h1>
				<div>
				<div v-if="startUpSent && startUpRecieved" class="tw-grid lg:tw-grid-cols-2 tw-grid-cols-1 tw-gap-2">
					<div>
						<h1 class="tw-text-[#9296A1] tw-font-bold tw-text-[15px] lg:tw-ml-0 tw-ml-5">Мои заявки</h1>
						<div class="tw-bg-[#fff] tw-py-3 tw-px-3 tw-mt-4">
				         <div class="tw-flex tw-items-start">
				         	<ul class="tw-ml-[10px]">
									<li v-for="(item, index) in startUpRecieved" class="tw-bg-[#fff] lg:tw-mb-0 tw-mb-2 tw-px-4 tw-py-4 tw-w-full tw-mb-4" :key="index">
										<div>
											<h1 class="tw-text-black tw-text-[22px] tw-font-[600]">{{ item.investorName }}</h1>
										</div>
				         			<p class="tw-text-[16px] tw-text-black">{{ item.message }}</p>
										<p class="tw-text-[16px] tw-text-black">{{ item.startupName }}</p>
										<div v-if="item.status === 'Pending'" class="tw-mt-[10px]">
											<button  class="tw-bg-red tw-text-[#00A43A]"  @click="acceptedStartup(item.id)">Подтевердить</button>
											<button  class="tw-bg-red tw-text-[#FF7A00] tw-ml-4"  @click="deleteStartup(item.id)">Отклонить</button>
										</div>
										<div v-if="item.status === 'Accepted'" class="tw-mt-[10px]">
											<button  class="tw-bg-red tw-text-[#00A43A]">Одобрено</button>
										</div>
									</li>
								</ul>
				         </div>
			      </div>
					</div>
					<div>
						<h1 class="tw-text-[#9296A1] tw-font-bold tw-text-[15px] lg:tw-ml-0 tw-ml-5">Мои запросы</h1>
						<div class="tw-bg-[#fff] tw-py-3 tw-px-3 tw-mt-4">
				         <div class="tw-flex tw-items-start">
				         	<ul class="tw-ml-[10px]">
									<li v-for="(item, index) in startUpSent" :key="index">
										<p class="tw-text-[18px] tw-font-bold tw-text-black">{{ item.startupName }}</p>
				         			<p class="tw-text-[16px] tw-text-black">{{ item.message }}</p>
									 	<div v-if="item.status === 'Accepted'" class="tw-mt-[10px]">
											<button  class="tw-bg-red tw-text-[#301CCB]">Одобрено</button>
										</div>
										<div v-else class="tw-mt-[10px]">
											<button  class="tw-bg-red tw-text-[#301CCB]">В ожидании</button>
										</div>
									</li>
								</ul>
				         </div>
			      </div>
					</div>
				</div>
					<div v-else>
						<p class="lg:tw-ml-0 tw-ml-5 tw-my-[15px]">Запрос не отправлен или нет офферов.</p>
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