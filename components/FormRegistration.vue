<template>
	<div>
		<h1 class="tw-text-[24px] tw-font-[600] tw-text-center">Регистрация {{ type }}</h1>
		<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-mx-auto tw-my-[30px]">
			<div class="tw-px-4 tw-py-4 tw-w-full">
				<form class="tw-w-full" action="">
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="fullname">Имя и фамилия</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="fullname"
                       placeholder="Введите имя и фамилию"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.fullName"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Электронная почта</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="name@example.com"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.email"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="phonenumber">Номер телефона</label>
					   <v-text-field
								v-maska="'+7 (###) ###-##-##'"
					        class="tw-w-full tw-mt-2"
					        id="phonenumber"
                       placeholder="+7 (---) --- --- --"
                       variant="outlined"
							  autocomplete="off"
							  v-model="form.phoneNumber"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="password">Пароль</label>
						<v-text-field
					     class="tw-mt-2"
						  id="password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    placeholder="Введите пароль"
                    variant="outlined"
						  :rules="[v => !!v || 'Это поле обязательно']"
                    @click:append-inner="visible = !visible"
						  autocomplete="new-password"
						  v-model="form.password"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="repeatpassword">Повторите пароль</label>
						<v-text-field
						  id="repeatpassword"
					     class="tw-mt-2"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    placeholder="Повторите пароль"
                    variant="outlined"
                    @click:append-inner="visible = !visible"
						  autocomplete="new-password"
                  ></v-text-field>
					</div>
					<div class="tw-flex tw-flex-col lg:tw-flex-row tw-items-start tw-justify-start tw-mb-4">
						<v-checkbox color="green" label=""></v-checkbox>
						<span class="tw-text-[#36CE9F] tw-text-[16px]"><span class="tw-text-black">Подтверждаю, что я ознакомился(ась) с</span><br>Пользовательским соглашением и обработкой персональных данных</span>
					</div>
					<div class="tw-mb-4">
						<button type="button" @click="submit" class="tw-bg-[#36CE9F] tw-text-white tw-font-bold tw-w-full tw-py-4">Зарегистрироваться</button>
					</div>
					<div class="tw-my-[10px] tw-flex tw-justify-center">
						<p>Уже зарегистрированы?</p>
						<a class="tw-text-[#36CE9F]" href="/auth/login">Войти</a>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { useServiceStore } from '~/stores/services';

const visible = ref(false);
const vis = ref(false)
defineProps<{
	type: any
}>()

const serviceStore = useServiceStore();
const router = useRouter()
const route = useRoute();
const registrationButton = () => {
	serviceStore.isRegistered = true
	router.push('/auth/verifycode/')
}

const role = ref(route.query.type)
const rayType = ref(route.query.type)

const mappeRole = computed(() => {
	if(rayType.value === 'Стартап') return 'Startup'
	if(rayType.value === 'Инвестор') return 'Investor'
	return 'Investor'
})


const form = ref({
  fullName: '',
  email: '',
  phoneNumber: '',
  password: '',
  role: mappeRole.value
})

const checkpassword = ref('')

const submit = async () => {
	// if(form.value.password !== checkpassword.value) {
	// 	serviceStore.toast.error('Пароли не совпадают')
	// 	return
	// }
	try {
		const response = await axios.post("https://zhervc-api.azurewebsites.net/api/Users/register", {
        fullName: form.value.fullName,
        email: form.value.email,
        phoneNumber: form.value.phoneNumber,
        password: form.value.password,
        role: form.value.role
}, {
  headers: {
    'Content-Type': 'application/json'
  }
});

		serviceStore.isRegistered = true
		console.log("Registered Succesfully")
		localStorage.setItem('email', form.value.email)
		localStorage.setItem('role', form.value.role)
		router.push({ path: '/auth/verifycode/', query: { role: form.value.role }})
	}catch (err) {
		console.log(err)
	}
}

onMounted(() => {
	console.log(form.value.role)
})
</script>

<style scoped>

</style>
