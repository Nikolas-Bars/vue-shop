import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/styles.scss'
import store from "@/vuex/store";
import router from './router/router'
import 'material-design-icons-iconfont'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
