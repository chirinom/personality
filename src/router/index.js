import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalityTest from '@/components/PersonalityTest.vue'
import LandingPage from '@/components/LandingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/test',
    name: 'test',
    component: PersonalityTest
  }
]

const router = new VueRouter({
  routes
})

export default router
