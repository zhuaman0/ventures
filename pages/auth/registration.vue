<template>
	<div class="tw-max-w-7xl tw-mx-auto tw-mt-[20px] tw-mb-[90px]">
		<div v-if="categoriesCard">
			<RouteRouterPath :breadcrumbs="breadcrumbs"/>
			<h1 class="tw-text-[32px] tw-ml-3 tw-font-[600] tw-leading-[120%]">Выберите роль для регистрации</h1>
			<CardRegistration @typeRegistration="typeRegistration" :cards="cards"/>
			<div class="tw-my-[10px] tw-flex">
				<p>Уже зарегистрированы?</p>
				<a class="tw-text-[#36CE9F]" href="/auth/login">Войти</a>
			</div>
		</div>
		<Transition
  			enter-active-class="animate__animated animate__fadeIn"
  			leave-active-class="animate__animated animate__fadeOut"
		>
  			<div v-if="registrationForm">
  			  <FormRegistration v-if="registrationForm" :type="selectedType"/>
  			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import FormRegistration from '~/components/FormRegistration.vue';
import { Link, RouteRouterPath } from '#components';
import plane from '~/assets/icons/registration/plane.png'	
import bag from '~/assets/icons/registration/bag.png'
import built from '~/assets/icons/registration/built.png'
import special from '~/assets/icons/registration/special.png'
import { useServiceStore } from '~/stores/services';


definePageMeta({
	layout: 'default',
	name: 'registration'
})

const breadcrumbs = [ 
	{ 
		title: 'Главная',
		disabled: false,
		href: '/'
	},
	{
		title: 'Выбор роли',
		disabled: true,
    	href: '/auth/login/' 
	}
]

const cards = [
	{
		img: plane,
		title: 'Стартап',
		para: 'Необходимо выполнить все требования для регистрации стартапа',
		link: '/'
	},
	{
		img: bag,
		title: 'Корпорация',
		para: 'Выручка за предыдущий календарный год должна быть более 800 млн ₽',
		link: '/'
	},
	{
		img: built,
		title: 'Инвестор',
		para: 'Бизнес-ангел может вернуть до 50% вложений в определенные стартап',
		link: '/'
	},
	{
		img: special,
		title: 'Специалист',
		para: 'Необходимо показать резюме с описанием навыков для работы в стартапе',
		link: '/'
	}
]

const route = useRoute()
const selectedType = computed(() => route.query.type || '')
const registrationForm = computed(() => !!selectedType.value)
const categoriesCard = computed(() => !registrationForm.value)
const serviceStore = useServiceStore();

// const form = ref({
//   fullName: '',
//   email: '',
//   phoneNumber: '',
//   password: '',
//   role: 'user'
// })

// const submit = async () => {
// 	try {
// 		await serviceStore.register(form.value)
// 		alert("Registered Succesfully")
// 	}catch (err) {
// 		console.log(err)
// 	}
// }

const typeRegistration = () => {
}
</script>

<style scoped>

</style>