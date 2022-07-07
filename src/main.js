import starportLibrary from '@starport/vue'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const app = createApp(App)
app.use(store).use(router).use(starportLibrary).mount('#app')
