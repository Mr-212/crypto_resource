
// import {crateApp} from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import AuthRoutes from './auth';


// Vue.use(VueRouter);

// var allRoutes = []
// allRoutes = allRoutes.concat(AuthRoutes)

// //const routes = allRoutes

// const router = new VueRouter({
//   routes: [
//     ...AuthRoutes
//   ]
// });
const routes = [
   ...AuthRoutes

];

const router = createRouter({
   history: createWebHistory(),
   routes,
});


 export default router;
