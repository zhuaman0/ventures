import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    AOS.init({
      // Твои настройки
      offset: 120,
      delay: 0,
      duration: 800,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })

    // Для динамически загружаемых компонентов — делаем refresh
    AOS.refresh()
  })
})
