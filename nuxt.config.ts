// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  app: {
	head: {
		link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
	}
  },
  vite: {
	css: {
		preprocessorOptions: {
			scss: {
			  additionalData: '@use "~/assets/scss/_colors.scss" as *;'
			}
		 }
	}
  },
  ssr: false,
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
  ],
  components: [
	{ path: '~/components', pathPrefix: true }
  ],
  imports: {
	dirs: ['stores', 'store/*/*', 'composables', 'api', 'components']
  },
  css: [
	'@/assets/scss/index.scss',
  ],
  i18n: {
	vueI18n: 'locales/config.ts',
	defaultLocale: 'ru',
	locales: [
		{ code: 'ru', name: 'Russian', file: 'ru.json' },
		{ code: 'kz', name: 'Kazakh', file: 'kz.json' }
	],
	strategy: 'no_prefix',
	langDir: 'locales/',
	detectBrowserLanguage: {
		useCookie: true,
		cookieKey: 'currentLanguage',
		redirectOn: 'root'
	}
  },
})