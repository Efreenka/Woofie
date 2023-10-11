import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faDog, faMars, faPlus, faVenus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const app = createApp(App)
const pinia = createPinia()

library.add(faBars, faDog, faMars, faPlus, faVenus, faXmark)

app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(pinia)
app.mount('#app')
