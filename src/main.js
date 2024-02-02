import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/style.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(router).mount('#app')
