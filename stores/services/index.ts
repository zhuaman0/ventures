import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { defaultUser, type ServiceStore } from "./types";
import { type User } from './types'
import userService from "~/api/services/userService";

export const useServiceStore = defineStore('service', {
	state: ():ServiceStore => ({
		user: defaultUser,
		toast: useToast(),
		isRegistered: false,
		email: '',
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
	}),

	actions: {
		async register(userData: any) {
			try {
				const res = await userService.registerUser(userData)
				console.log('Ответ от сервера:', res)
				this.JWT_TOKEN = res.token
				localStorage.setItem('token', res.token)
			}catch(err) {
				console.log(err)
			}
		}
	}
})