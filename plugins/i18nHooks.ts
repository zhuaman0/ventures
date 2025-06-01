import { useServiceStore } from "~/stores/services"

export default defineNuxtPlugin(nuxtApp => {
	nuxtApp.hook('i18n:beforeLocaleSwitch', ({ oldLocale, newLocale, initialSetup, context }) => {
		const serviceStore = useServiceStore();
		console.log('onBeforeLanguageSwitch', oldLocale, newLocale, initialSetup)
		if(oldLocale !== newLocale) {
			serviceStore.pageLoading = true
		}
	 })
	 nuxtApp.hook('i18n:localeSwitched', ({ oldLocale, newLocale }) => {
		const serviceStore = useServiceStore();
		console.log('onLanguageSwitched', oldLocale, newLocale)
		serviceStore.toast.success(`Язык переключён на ${newLocale.toUpperCase()}`)
		setTimeout(() => {
			serviceStore.pageLoading = false
		}, 300)
	 })
})