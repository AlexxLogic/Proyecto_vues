import { createRouter, createWebHistory } from 'vue-router'
import LoginInicial from '../views/LoginInicial.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginInicial
  },
  {
    path: '/Pagina_index',
    name: 'incio',
    component: () => import('../views/PaginaInicio.vue')
  },
  {
    path: '/Pagina_users',
    name: 'usuarios',
    component: () => import('../views/PaginaUsers.vue')
  },
  {
    path: '/Pagina_proveedores',
    name: 'proveedores',
    component: () => import('../views/PaginaProvedores.vue')
  },
  {
    path: '/Pagina_registros',
    name: 'registros',
    component: () => import('../views/PaginaRegistros.vue')
  },
  {
    path: '/Pagina_newproveedor',
    name: 'newprovedor',
    component: () => import('../views/NewProveedor.vue')
  },
  {
    path: '/Pagina_updateProveedor/:id',
    name: 'Pagina_updateProveedor',
    component: () => import('../views/updateProveedor.vue')
  },
  {
    path: '/r',
    name: 'r',
    component: () => import('../views/r.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
