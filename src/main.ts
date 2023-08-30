import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDog, faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

const app = createApp(App)

library.add(faDog, faBars)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
