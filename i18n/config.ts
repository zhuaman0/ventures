import kz from './locales/kz.json'
import ru from './locales/ru.json'

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'ru',
	messages: {
		ru,
		kz
	}
}))