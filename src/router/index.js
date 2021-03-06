import Vue from 'vue'
import Router from 'vue-router'

import Nav from '@/components/Nav'
import About from '@/components/About'
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
      name: 'Projects',
      component: Projects
    },
    {
      path: '/urban',
      name: 'Urban',
      component: Urban
    },
    {
      path: '/seizure',
      name: 'Seizure',
      component: Seizure
    },
    {
      path: '/explosion',
      name: 'Explosion',
      component: Explosion
    },
    {
      path: '/decadence',
      name: 'Decadence',
      component: Decadence
    },
    {
      path: '/threshold',
      name: 'Threshold',
      component: Threshold
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode: 'history'
})
