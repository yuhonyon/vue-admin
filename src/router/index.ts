import Vue from 'vue';
import Router from 'vue-router';
import CoreLayout from '@/components/layout/AppMain.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/account/Login.vue'),
    }, {
      path: '/',
      name: 'coreLayout',
      component: CoreLayout,
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/Home.vue'),
        }, {
          path: '*',
          redirect: 'home',
        }
      ],

    }, {
      path: '*',
      redirect: '/login',
    }
  ],
});
