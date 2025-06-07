	<template>
		<header class="tw-w-full tw-bg-white tw-py-4 tw-px-6 tw-shadow">
		<div class="tw-max-w-7xl tw-mx-auto tw-flex tw-items-center tw-justify-between">
			<div @click="$router.push('/')" class="tw-font-bold tw-text-lg">
			<img src="@/assets/icons/header_logo.svg" alt="">
			</div>
	
			<nav class="tw-hidden lg:tw-flex tw-items-center tw-gap-6 tw-text-sm tw-font-bold tw-text-gray-900">
			<NuxtLink to="/" class="hover:tw-text-green-600">Стартапы</NuxtLink>
			<NuxtLink to="/" class="hover:tw-text-green-600">Корпорации</NuxtLink>
			<NuxtLink to="/" class="hover:tw-text-green-600">Инвесторы</NuxtLink>
			<NuxtLink to="/" class="hover:tw-text-green-600">Специалисты</NuxtLink>
			<NuxtLink to="/" class="hover:tw-text-green-600">Новости</NuxtLink>
			</nav>
	
			<div class="tw-hidden md:tw-flex tw-items-center tw-gap-3">
			<v-menu>
				<template v-slot:activator="{ props }">
				<v-btn variant="text" v-bind="props">
					{{ currentLocaleName }}
				</v-btn>
				</template>
				<v-list>
				<v-list-item
				@click="changeLocale(l.code)"
					v-for="(l, index) in locales"
					:key="index"
					:value="index"
				>
					<v-list-item-title>
<span class="tw-mr-2">{{ l.flag }}</span> {{ l.name }}
</v-list-item-title>
				</v-list-item>
				</v-list>
			</v-menu>
					<Username v-if="serviceStore.JWT_TOKEN"/>
					<div v-else>
					<NuxtLink to="/auth/login" class="tw-w-full tw-text-center tw-py-2 tw-px-2 tw-text-white tw-rounded tw-bg-[#36CE9F]/80">
						Войти
					</NuxtLink>
					<NuxtLink to="/" class="tw-border tw-border-[#36CE9F] tw-ml-4 tw-text-green-600 tw-w-full tw-text-center tw-px-2 tw-py-2 tw-rounded tw-bg-[#36CE9F]/10">
						Регистрация
					</NuxtLink>
					</div>
	
			<Icon name="material-symbols-light:menu" class="tw-text-3xl tw-cursor-pointer tw-block lg:tw-hidden" @click="drawerOpen = true" />
			</div>
	
			<div class="tw-block md:tw-hidden">
			<Icon name="material-symbols-light:menu" class="tw-text-3xl tw-cursor-pointer" @click="drawerOpen = true" />
			</div>
		</div>
		<Transition name="slide">
			<div v-if="drawerOpen" class="tw-fixed tw-inset-0 tw-z-50 tw-bg-black/50" @click.self="drawerOpen = false">
			<div class="tw-fixed tw-right-0 tw-top-0 tw-w-80 tw-h-full tw-bg-white tw-p-6 tw-flex tw-flex-col ">
				<div class="tw-flex tw-justify-between tw-items-center tw-mb-6">
				<div class="tw-font-bold tw-text-lg">			<img src="@/assets/icons/header_logo.svg" alt="">
				</div>
				<Icon name="material-symbols-light:close" class="tw-text-2xl tw-cursor-pointer" @click="drawerOpen = false" />
				</div>
	
				<nav class="tw-flex tw-flex-col tw-gap-6 tw-font-bold">
				<NuxtLink to="/" class="hover:tw-text-green-600">Стартапы</NuxtLink>
				<NuxtLink to="/" class="hover:tw-text-green-600">Корпорации</NuxtLink>
				<NuxtLink to="/" class="hover:tw-text-green-600">Инвесторы</NuxtLink>
				<NuxtLink to="/" class="hover:tw-text-green-600">Специалисты</NuxtLink>
				<NuxtLink to="/" class="hover:tw-text-green-600">Новости</NuxtLink>
				
				</nav>
	
				<div class="tw-flex tw-flex-col tw-items-center tw-gap-3 tw-mt-auto">
					<v-menu>
						<template v-slot:activator="{ props }">
						<v-btn variant="text" v-bind="props">
							{{ locales[0].name }}
						</v-btn>
						</template>
						<v-list>
						<v-list-item
							v-for="(locale, index) in locales"
							:key="index"
							:value="index"
						>
							<v-list-item-title>
								<span class="tw-mr-2">{{ locale.flag }}</span> {{ locale.name }}
							</v-list-item-title>
						</v-list-item>
						</v-list>
					</v-menu>
					<NuxtLink to="/auth/login" class="tw-bg-[#] tw-w-full tw-text-center tw-text-white tw-py-2 tw-rounded hover:tw-bg-[#36CE9F]/80">
						Войти
					</NuxtLink>
					<NuxtLink to="/" class="tw-border tw-border-[#36CE9F] tw-text-green-600 tw-w-full tw-text-center tw-py-2 tw-rounded hover:tw-bg-[#36CE9F]/10">
						Регистрация
					</NuxtLink>
				</div>
			</div>
			</div>
		</Transition>
		</header>
	</template>
	
	
	<script setup lang="ts">
		import { useI18n } from '#imports';
import { useServiceStore } from '~/stores/services';

		const { locale } = useI18n()
		const drawerOpen = ref(false)
		const token = computed(() => serviceStore.JWT_TOKEN)

		const locales = [
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'kz', name: 'Қазақша', flag: '🇰🇿' }
]

const serviceStore = useServiceStore();

const currentLocaleName = computed(() => {
  const current = locales.find(l => l.code === locale.value)
  return current ? current.name : ''
})

function changeLocale(code: any) {
  locale.value = code
  document.cookie = `currentLanguage=${code}; path=/`
  window.location.reload()
}

	</script>
	
	<style scoped>
	.slide-enter-active,
	.slide-leave-active {
		transition: transform 0.3s ease;
	}
	.slide-enter-from {
		transform: translateX(100%);
	}
	.slide-leave-to {
		transform: translateX(100%);
	}
	</style>
	