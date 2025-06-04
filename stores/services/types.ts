import { useToast } from "vue-toastification";
const toast = useToast();

export type ServiceStore = {
	user: User,
	toast: typeof toast,
	isRegistered: boolean,
	email: string,
	pageLoading: boolean,
	overlayLoading: boolean,
	JWT_TOKEN: string,
	resultNotFound: boolean,
	pageNotFound: boolean,
	language: string,
	modal: {
		type: string,
		show: boolean,
		header: string,
		buttonText: string,
		rowData?: { text: string; value: string }[];
		onClick: () => void;
	}
}

export interface User  {
	email: string, 
	fullname: string,
	phonenumber: string,
	role: string
}

export const defaultUser: User = {
	email: '',
  fullname: '',
  phonenumber: '',
  role: ''
}