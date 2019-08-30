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
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/news',
      name: 'news',
      component: () => import(/* webpackChunkName: "news" */ './views/News.vue'),
    },
    //新闻详情
    {
      path: '/newDetails',
      name: 'newDetails',
      component: () => import(/* webpackChunkName: "news" */ './views/newDetails.vue'),
      props: (route) => (route.query)
    },
    {
      path: '/newlist',
      name: 'newlist',
      component: () => import(/* webpackChunkName: "news" */ './views/newList.vue'),
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
    //部门领导照片
    {
      path: '/leader',
      name: 'leader',
      component: () => import(/* webpackChunkName: "news" */ './views/Leader.vue'),
    },
  ],
});
