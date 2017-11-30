import Home from './../pages/Home.vue';
import About from './../pages/About.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/about',
    component: About,
    name: 'about',
  },
];

export default routes;
