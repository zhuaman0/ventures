<template>
	<div>
		<h1 class="tw-text-[24px] tw-font-[600] tw-text-center">Регистрация {{ type }}</h1>
		<div class="tw-bg-white tw-flex-col tw-items-center tw-relative tw-max-w-[530px] tw-mx-auto tw-my-[30px]">
			<div class="tw-px-4 tw-py-4 tw-w-full">
				<form class="tw-w-full" action="">
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Имя и фамилия</label>
					   <v-text-field
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="Введите имя и фамилию"
                       variant="outlined"
							  autocomplete="off"
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
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Номер телефона</label>
					   <v-text-field
								v-maska="'+7 (###) ###-##-##'"
					        class="tw-w-full tw-mt-2"
					        id="gmail"
                       placeholder="+7 (---) --- --- --"
                       variant="outlined"
							  autocomplete="off"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="password">Пароль</label>
						<v-text-field
					     class="tw-mt-2"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    placeholder="Введите пароль"
                    variant="outlined"
						  :rules="[v => !!v || 'Это поле обязательно']"
                    @click:append-inner="visible = !visible"
						  autocomplete="new-password"
                  ></v-text-field>
					</div>
					<div class="tw-mb-4">
						<label class="tw-text-[#767A87] tw-font-[400] tw-text-[14px] tw-leading-[12px]" for="gmail">Повторите пароль</label>
						<v-text-field
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
						<button class="tw-bg-[#36CE9F] tw-text-white tw-font-bold tw-w-full tw-py-4">Зарегистрироваться</button>
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
const visible = ref(false);
defineProps<{
	type: any
}>()
</script>

<style scoped>

</style>
