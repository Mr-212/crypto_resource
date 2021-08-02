import { createApp } from 'vue';
import VueRouter from 'vue-router';
import createRouter from 'vue-router';


// import home from './components/ExampleComponent.vue';
import register from '../components/auth/register.vue';
import Login from '../components/auth/Login.vue';

// Vue.use(Router)

const AuthRoutes =  [
    {
        name: 'register',
        path: '/register',
        component: register
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
  ];
  // const router = createRouter({
  //   routes:AuthRoutes
  // });

  export default AuthRoutes

 