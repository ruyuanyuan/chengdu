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
    {
      path: '/investment',
      name: 'investment',
      component: () => import(/* webpackChunkName: "news" */ './views/Investment.vue'),
    },
    {
      path: '/makepblic',
      name: 'makepblic',
      component: () => import(/* webpackChunkName: "news" */ './views/MakePublic.vue'),
    },
    {
      path: '/service',
      name: 'service',
      component: () => import(/* webpackChunkName: "news" */ './views/Service.vue'),
    },
    {
      path: '/company',
      name: 'company',
      component: () => import(/* webpackChunkName: "news" */ './views/company/Company.vue'),
    },
  ],
});
