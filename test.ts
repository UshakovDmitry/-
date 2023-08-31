import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Auth from '../views/Auth.vue'
import Layout from '../views/Layout.vue'
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
      public: true,
    }
  },
  {
    path: '/',
    component: Layout,
    meta: {},
    children: [
      {
        path: '',
        redirect: 'main'
      },
      {
        path: 'main',
        name: 'Main',
        component: Main,
      },
      {
        path: 'map',
        name: 'Map',
        component: Map,
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
      },
      {
        path: 'detail',
        name: 'Detail',
        component: Detail,
      },
      {
        path: 'search',
        name: 'Search',
        component: Search,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isPublic = to.meta.public
  const loggedIn = localStorage.getItem('user')

  if (!isPublic && !loggedIn) {
    return next({ path: '/auth' })
  }
  next()
})

export default router
