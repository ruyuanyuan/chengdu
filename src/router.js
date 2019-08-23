import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ './views/News.vue'),
    },
    {
      path: '/park',
      name: 'park',
      component: () => import(/* webpackChunkName: "news" */ './views/Park.vue'),
    },
  ],
});
