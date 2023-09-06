import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import Auth from '../views/auth/auth.component.vue';
import Layout from '../layout/dafault.vue';
import Dashboard from '../views/dashboard/dashboard.component.vue';
import Map from '../views/map/map.component.vue';
import Applications from '../views/applications/applications.component.vue';
import Transport from '../views/transport/transport.component.vue';
import Delivery from '../views/delivery/delivery.component.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      public: true,
    },
  },
  {
    path: '/',
    component: Layout,
    meta: {},
    children: [
      {
        path: '',
        redirect: 'dashboard',
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'map',
        name: 'Map',
        component: Map,
      },
      {
        path: 'applications',
        name: 'Applications',
        component: Applications,
      },
      {
        path: 'delivery',
        name: 'Delivery',
        component: Delivery,
      },
      {
        path: 'transport',
        name: 'Transport',
        component: Transport,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;

