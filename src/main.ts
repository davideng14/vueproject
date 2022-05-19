import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import * as VueRouter from 'vue-router';
import { routes } from '@/pages/routes/routes';
import store from '@/store/store';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes, 
})

createApp(App)
.use(store)
.use(Antd)
.use(router)
.mount('#app')
