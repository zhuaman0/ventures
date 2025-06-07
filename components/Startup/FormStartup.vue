<template>
	<div>
				<form class="tw-w-full" action="">
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="componyname">Публичное название</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="componyname"
                       placeholder="Например, BnB Ventures"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.componyname"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="site">Сайт</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="site"
                       placeholder="https://"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.site"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="fullname">Имя и фамилия контактного лица</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="fullname"
                       placeholder="Иван Иванов"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.username"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="email">Публичная электронная почта</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="email"
                       placeholder="name@example.com"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.gmail"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="phonenumber">Номер телефона</label>
					   <v-text-field
							  v-maska="'+7 (###) ###-##-##'"
					        class="tw-w-full tw-mt-2"
					        id="phonenumber"
                       placeholder="+7 (777) 123 45 67"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.phonenumber"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="org">Наименование организации</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="org"
                       placeholder="Например, ООО “Компания”"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.orginizationname"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="idnumber">Идентификационный номер</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="idnumber"
                       placeholder="Укажите номер"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.indentidynumber"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="year">Год основания</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="year"
                       placeholder="Год основания"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.year"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="city">Страна регистрации</label>
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
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="length">Количество сотрудников</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="length"
                       placeholder="Укажите количество сотрудников"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.listusers"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="desc">Описание</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="desc"
                       placeholder="Расскажите о вашем продукте"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.description"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="raz">Стадия развития стартапа</label>
<v-autocomplete
  class="tw-w-full tw-mt-2"
  label="Выберите стадию развития"
  :items="development"
  item-title="name"
  item-value="id"
  variant="outlined"
  v-model="form.development"
></v-autocomplete>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="raz">Стадия инвестирования</label>
<v-autocomplete
  class="tw-w-full tw-mt-2"
  label="Выберите стадию инвестирования"
  :items="investmentStages"
  item-title="name"
  item-value="id"
  variant="outlined"
  v-model="form.investmentstage"
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
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="innovation">Технологии вашего стартапа</label>
  <v-autocomplete
    class="tw-w-full tw-mt-2"
    label="Выберите технологии"
    :items="innovationMethods"
    item-title="name"
    item-value="id"
    variant="outlined"
    v-model="form.innovationmethod"
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
	<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="fullname">Общий объем ранее привлеченных инвестиций</label>
   <v-text-field
        class="tw-w-full tw-mt-2"
        id="fullname"
        placeholder="$"
        variant="outlined"
		  autocomplete="off"
		  v-model="form.allob"
   ></v-text-field>
</div>
<div class="tw-mb-4">
	<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="fullname">Список инвесторов</label>
   <v-text-field
        class="tw-w-full tw-mt-2"
        id="fullname"
        placeholder="Перечислите инвесторов, от которых получали инвестиции"
        variant="outlined"
		  autocomplete="off"
		  v-model="form.listalluser"
   ></v-text-field>
</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="investment">Логотип</label>
  <v-file-input
    class="tw-w-full tw-mt-2"
    label="Выберите файл или перетащите его"
    :items="country"
    item-title="name"
    item-value="id"
    variant="outlined"
	 v-model="form.logo"
  ></v-file-input>
</div>
<div class="tw-mb-4">
  <label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px]" for="investment">Презентация</label>
  <v-file-input
    class="tw-w-full tw-mt-2"
    label="Выберите файл или перетащите его"
    :items="country"
    item-title="name"
    item-value="id"
    variant="outlined"
	 v-model="form.presentaion"
  ></v-file-input>
</div>
					<div class="tw-mb-4">
						<button type="button" @click="registerAnketa" class="tw-bg-[#36CE9F] tw-text-white tw-font-bold tw-w-full tw-py-4"><p class="tw-text-white">Зарегистрироваться</p></button>
					</div>	

				</form>
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
	year: 0,
	country: null,
	listusers: '',
	stage: null,
	industry: null,
	innovationmethod: null,
   investmentstage: null, 
	buisnessmodel: null,
	salesmodels: null,
	description: '',
	logo: null,
	presentaion: null,
	development: null,
	techmodel: null,
	allob: 0,
	listalluser: ''
})

const country = ref([])
const development = ref([])
const industries = ref([])
const innovationMethods = ref([])
const investmentStages = ref([])
const buisnessModel = ref([])
const techModel = ref([])
const salesModels = ref([])
const router = useRouter();
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
			CountryId: form.value.country,
			EmployeeCount: form.value.listusers,
			Description: form.value.description,
			DevelopmentStageId: form.value.development,
			InvestmentStageId: form.value.investmentstage,
			HasSales: true,
			ActivelyLookingForInvestment: true,
			SourceInfoId: 1,
			Logo: form.value.logo,
			Presentation: form.value.presentaion,
			IndustryIds: form.value.industry,
			TechnologyIds: form.value.techmodel,
			BusinessModelIds: form.value.buisnessmodel,
			SalesModelIds: 2,
			TargetCountryIds: 1,
			TotalPreviousInvestment: form.value.allob,
			InvestorList: form.value.listalluser
		},
	   {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data'
			}
		})
		console.log('All corect', response.data)
		router.push('/investor/questionnaire/')
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

const getTechModels = async () => {
  try {
    const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Technologies')
    techModel.value = response.data
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
	getSalesModels(),
	getTechModels()
})
</script>

<style scoped>

</style>