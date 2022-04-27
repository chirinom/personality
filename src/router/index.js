import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalityTest from '@/components/pages/PersonalityTest.vue'
import LandingPage from '@/components/pages/LandingPage.vue'
import ResultsPage from '@/components/pages/ResultsPage.vue'

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
  },
  {
    path: '/results',
    name: 'results',
    component: ResultsPage
  }
]

const router = new VueRouter({
  routes
})

export default router
