import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import Nav from '@/components/Nav'
import Home from '@/components/Home'
import Projects from '@/components/Projects'
import Urban from '@/components/Urban'
import Seizure from '@/components/Seizure'
import Explosion from '@/components/Explosion'
import Decadence from '@/components/Decadence'
import Threshold from '@/components/Threshold'

Vue.use(Router)
Vue.component('app-nav', Nav)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/urban',
      name: 'Urban',
      component: Urban
    },
    {
      path: '/projects/seizure',
      name: 'Seizure',
      component: Seizure
    },
    {
      path: '/projects/explosion',
      name: 'Explosion',
      component: Explosion
    },
    {
      path: '/projects/decadence',
      name: 'Decadence',
      component: Decadence
    },
    {
      path: '/projects/threshold',
      name: 'Threshold',
      component: Threshold
    }
  ],
  mode: 'history'
})
