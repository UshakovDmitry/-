import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Auth from '../views/Auth.vue'
import Main from '../views/Main.vue'
import Map from '../views/Map.vue'
import Orders from '../views/Orders.vue'
import Detail from '../views/Detail.vue'
import Search from '../views/Search.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    meta: {
      public: true,  // публичный маршрут
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/map',
    name: 'Map',
    component: Map,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Глобальный охранник для маршрутов
router.beforeEach((to, from, next) => {
  const isPublic = to.meta.public;
  const loggedIn = localStorage.getItem('user');  // Для примера. Используйте настоящую логику авторизации

  // Перенаправить на страницу авторизации, если это не публичный маршрут и пользователь не авторизован
  if (!isPublic && !loggedIn) {
    return next({ path: '/auth' });
  }

  // В противном случае продолжить навигацию
  next();
})

export default router
