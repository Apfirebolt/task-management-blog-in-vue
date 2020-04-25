import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './Home.vue'
// import TestHome from './test/Index.vue'
// import TestRouteChildren from './test/testChildren'
import DashboardPage from './Dashboard.vue';
import LoginPage from './Login.vue';
import RegisterPage from './Register.vue';
import AdminPage from './Admin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },

    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    },

    {
      path: '/admin',
      name: 'admin',
      component: AdminPage
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    },

    // {
    //   path: '/blog-detail/:id',
    //   name: 'blog-detail',
    //   component: BlogDetailPage
    // },

    // {
    //   path: '/activity',
    //   name: 'activity',
    //   component: ActivityPage,
    //   beforeEnter (to, from, next) {
    //     let token = localStorage.getItem('token');
    //     if(token)
    //       next();
    //     else {
    //       next('/login');
    //     }
    //   }
    // },

    // {
    //   path: '/test',
    //   name: 'test',
    //   component: TestHome,
    //   children: TestRouteChildren
    // },
  ]
})
