<template>
	<div class="tw-py-4 tw-px-4 tw-max-w-[1300px] tw-mx-auto">
		<div>
			<h1 class="tw-text-center tw-text-[#181236] tw-font-[600] tw-text-[32px]">Анкета стартапа</h1>
					<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-mx-auto tw-my-[30px]">
			<div class="tw-px-4 tw-py-4 tw-w-full">
				<form class="tw-w-full" action="">
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="fullname">Публичное название</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="fullname"
                       placeholder="Например, BnB Ventures"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.componyname"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Сайт</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="https://"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.site"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="phonenumber">Имя и фамилия контактного лица</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="phonenumber"
                       placeholder="Иван Иванов"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.username"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Публичная электронная почта</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="name@example.com"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.gmail"
                  ></v-text-field>
					</div>
										<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Номер телефона</label>
					   <v-text-field
							  v-maska="'+7 (###) ###-##-##'"
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="+7 (777) 123 45 67"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.phonenumber"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Наименование организации</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="Например, ООО “Компания”"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.orginizationname"
                  ></v-text-field>
					</div>
										<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Идентификационный номер</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="Укажите номер"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.indentidynumber"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Год основания</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="Год основания"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.year"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Страна регистрации</label>
<v-autocomplete
  class="tw-w-full tw-mt-2"
  label="Страна регистрации"
  :items="country"
  item-title="name"
  item-value="id"
  variant="outlined"
  v-model="form.country"
></v-autocomplete>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Количество сотрудников</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="Укажите количество сотрудников"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.listusers"
                  ></v-text-field>
					</div>
															<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Страна регистрации</label>
<v-autocomplete
  class="tw-w-full tw-mt-2"
  label="Выберите страну"
  :items="country"
  item-title="name"
  item-value="id"
  variant="outlined"
  v-model="form.country"
></v-autocomplete>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Описание</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="Расскажите о вашем продукте"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.description"
                  ></v-text-field>
					</div>
										<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Стадия развития стартапа</label>
<v-autocomplete
  class="tw-w-full tw-mt-2"
  label="Выберите стадию развития"
  :items="development"
  item-title="name"
  item-value="id"
  variant="outlined"
  v-model="form.stage"
></v-autocomplete>
					</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="industry">Индустрия</label>
  <v-autocomplete
    class="tw-w-full tw-mt-2"
    label="Выберите индустрию"
    :items="industries"
    item-title="name"
    item-value="id"
    variant="outlined"
    v-model="form.industry"
  ></v-autocomplete>
</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="innovation">Метод инноваций</label>
  <v-autocomplete
    class="tw-w-full tw-mt-2"
    label="Выберите метод"
    :items="innovationMethods"
    item-title="name"
    item-value="id"
    variant="outlined"
    v-model="form.innovationmethod"
  ></v-autocomplete>
</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="investment">Стадия инвестиций</label>
  <v-autocomplete
    class="tw-w-full tw-mt-2"
    label="Выберите стадию"
    :items="investmentStages"
    item-title="name"
    item-value="id"
    variant="outlined"
    v-model="form.investmentstage"
  ></v-autocomplete>
</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="investment">Бизнес-модели</label>
  <v-autocomplete
    class="tw-w-full tw-mt-2"
    label="Выберите стадию"
    :items="buisnessModel"
    item-title="name"
    item-value="id"
    variant="outlined"
    v-model="form.buisnessmodel"
  ></v-autocomplete>
</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="investment">Модели продаж</label>
  <v-autocomplete
    class="tw-w-full tw-mt-2"
    label="Выберите стадию"
    :items="salesModels"
    item-title="name"
    item-value="id"
    variant="outlined"
    v-model="form.salesmodels"	
  ></v-autocomplete>
</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="investment">Рынки, на которых вы работаете</label>
  <v-autocomplete
    class="tw-w-full tw-mt-2"
    label="Выберите стадию"
    :items="country"
    item-title="name"
    item-value="id"
    variant="outlined"
    v-model="form.country"	
  ></v-autocomplete>
</div>

					<div class="tw-mb-4">
						<button type="button" @click="registerAnketa" class="tw-bg-[#36CE9F] tw-text-white tw-font-bold tw-w-full tw-py-4"><p class="tw-text-white">Зарегистрироваться</p></button>
					</div>
				</form>
			</div>
		</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios'

const form = ref({
	componyname: '',
	site: '',
	username: '',
	gmail: '',
	phonenumber: '',
	orginizationname: '',
	indentidynumber: '',
	year: '',
	country: null,
	listusers: '',
	stage: null,
	industry: null,
	innovationmethod: null,
   investmentstage: null, 
	buisnessmodel: null,
	salesmodels: null,
	description: ''
})

const country = ref([])
const development = ref([])
const industries = ref([])
const innovationMethods = ref([])
const investmentStages = ref([])
const buisnessModel = ref([])
const salesModels = ref([])
const token = localStorage.getItem('JWT_TOKEN')



const registerAnketa = async () => {
	try {
		const response = await axios.post('https://zhervc-api.azurewebsites.net/api/Startups', {
			PublicName: form.value.componyname,
			ContactFullName: form.value.username,
			PublicEmail: form.value.gmail,
			PhoneNumber: form.value.phonenumber,
			Website: form.value.site,
			OrganizationName: form.value.orginizationname,
			IdentificationNumber: form.value.indentidynumber,
			FoundingYear: form.value.year,
			CountryId: 4,
			EmployeeCount: 4,
			Description: form.value.description,
			DevelopmentStageId: form.value.stage,
			HasSales: true,
			ActivelyLookingForInvestment: true,
			TotalPreviousInvestment: 0.5,
			InvestorList: 'What kind of list',
			SourceInfoId: 1,
			Logo: 'Screenshot from 2025-06-01 23-30-21.png',
			Presentation: 'Screenshot from 2025-06-01 23-30-21.png',
			IndustryIds: [form.value.industry],
         InnovationMethodId: form.value.innovationmethod,
         InvestmentStageId: form.value.investmentstage,
			TechnologyIds: [1, 2],
			BusinessModelIds: [1],
			SalesModelIds: [2],
			TargetCountryIds: [1]
		},
	   {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data'
			}
		})
		console.log('All corect', response.data)
	}catch(err) {
		console.log(err)
	}
}

const getCountryList = async () => {
	try {
		const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Countries')
		country.value = response.data
		console.log(country.value)
	}catch(err) {
		console.log(err)
	}
}

const getDevelopmentList = async () => {
	try {
		const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Developmentstages')
		development.value = response.data
		console.log(development.value)
	}catch(err) {
		console.log(err)
	}
}

const getIndustries = async () => {
  try {
    const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Industries')
    industries.value = response.data
  } catch (err) {
    console.log(err)
  }
}

const getInnovationMethods = async () => {
  try {
    const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Innovationmethods')
    innovationMethods.value = response.data
  } catch (err) {
    console.log(err)
  }
}

const getInvestmentStages = async () => {
  try {
    const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Investmentstages')
    investmentStages.value = response.data
  } catch (err) {
    console.log(err)
  }
}

const getBuisnessModel = async () => {
  try {
    const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Businessmodels')
    buisnessModel.value = response.data
  } catch (err) {
    console.log(err)
  }
}

const getSalesModels = async () => {
  try {
    const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Salesmodels')
    salesModels.value = response.data
  } catch (err) {
    console.log(err)
  }
}


onMounted(() => {
	getCountryList(),
	getDevelopmentList(),
	getIndustries(),
	getInnovationMethods(),
	getInvestmentStages(),
	getBuisnessModel(),
	getSalesModels()
})
</script>

<style scoped>

</style>