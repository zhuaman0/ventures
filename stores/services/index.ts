import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { type ServiceStore } from "./types";

export const useServiceStore = defineStore('service', {
	state: ():ServiceStore => ({
		toast: useToast(),
		pageLoading: false,
		overlayLoading: false,
		JWT_TOKEN: '',
		resultNotFound: false,
		pageNotFound: false,
		language: 'kz',
		modal: {
			type: 'success',
			show: false,
			header: 'Ваше обращение успешно отправлена!',
			buttonText: 'Вернуться на главную',
			rowData: [],
			onClick: () => {},
		}
	})
})