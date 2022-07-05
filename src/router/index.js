import { createRouter, createWebHistory } from 'vue-router'

import WorkerBee from '../views/WorkerBee.vue'
import Portfolio from '../views/Portfolio.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Portfolio },
  { path: '/portfolio', component: Portfolio },
  { path: '/workerBee', component: WorkerBee }
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
