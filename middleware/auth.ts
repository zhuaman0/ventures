export default defineNuxtRouteMiddleware((to, from) => {
	const token = localStorage.getItem('JWT_TOKEN')
	if(!token) {
		return navigateTo('/auth/login')
	}
})
