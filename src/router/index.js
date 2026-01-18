import { createRouter, createWebHistory } from 'vue-router'
import SheetPage from '../pages/SheetPage.vue'

const routes = [
  { path: '/', redirect: '/sheet' },
  { path: '/sheet', component: SheetPage },
  // future: /items, /disc, /combat
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
