import { useToast } from "vue-toastification";
const toast = useToast();

export type ServiceStore = {
	toast: typeof toast,
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