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
      props: (route) => (route.query)
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
    //党群党建
    {
      path: '/party',
      name: 'party',
      component: () => import(/* webpackChunkName: "news" */ './views/Party.vue'),
    },
    //部门领导照片
    {
      path: '/leader',
      name: 'leader',
      component: () => import(/* webpackChunkName: "news" */ './views/Leader.vue'),
    },
    {
      path: '/leaderDetails',
      name: 'leaderDetails',
      component: () => import(/* webpackChunkName: "news" */ './views/LeaderDetails.vue'),
      props: (route) => (route.query)
    },
     //部门
     {
      path: '/department',
      name: 'department',
      component: () => import(/* webpackChunkName: "news" */ './views/Department.vue'),
    },
    {
      path: '/departmentDetails',
      name: 'departmentDetails',
      component: () => import(/* webpackChunkName: "news" */ './views/DepartmentDetails.vue'),
      props: (route) => (route.query)
    },
    //反馈内容
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import(/* webpackChunkName: "news" */ './views/Feedback.vue'),
    },
  ],
});
