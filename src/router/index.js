import { createWebHistory, createRouter } from 'vue-router'
import HeroView from '@/components/views/HeroView.vue'
import Catalog from '@/components/views/Catalog.vue'
import Contact from '@/components/views/Contact.vue'

const routes = [
  { path: '/', component: HeroView },
  { path: '/catalog', component: Catalog },
  { path: '/contact', component: Contact}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
