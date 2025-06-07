export default defineNuxtRouteMiddleware((to, from) => {
	const role = localStorage.getItem('role');
	if(role !== 'Admin') {
		return navigateTo('/')
	}
})