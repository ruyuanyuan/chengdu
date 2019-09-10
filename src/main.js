import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import tool from './utils/tool'
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.scss'
import 'swiper/dist/css/swiper.css'
Vue.use(ElementUI);
Vue.use(tool);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
