import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import { defaultUser, type ServiceStore } from "./types";
import { type User } from './types'
import userService from "~/api/services/userService";
import axios from "axios";

export const useServiceStore = defineStore('service', {
	state: ():ServiceStore => ({
		user: { ...defaultUser },
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
		},
		async getUserInfo() {
			const token = localStorage.getItem('JWT_TOKEN');
			if (!token) {
				console.log("Токен не найден в localStorage");
				return;
			}

			try {
				const response = await axios.get('https://zhervc-api.azurewebsites.net/api/Users/me', {
					headers: {
						Authorization: `Bearer ${token}`
					}
				});
				this.user = response.data;
				console.log("✅ Пользователь загружен:", this.user);
			} catch (err) {
				console.log("❌ Ошибка при загрузке пользователя:", err);
			}
		},
		clearUser() {
			this.user = {
					email: '',
					fullname: '',
               phonenumber: '',
               role: ''
			},
			localStorage.removeItem("JWT_TOKEN");
		   localStorage.removeItem('email')
			localStorage.removeItem('role')
			this.JWT_TOKEN = ''
		},
		setToken(token: string) {
			this.JWT_TOKEN = token
			localStorage.setItem('JWT_TOKEN', token)
		},
		laodToken() {
			const token = localStorage.getItem('JWT_TOKEN');
			if(token) {
				this.JWT_TOKEN = token
			}
		}
	}
})