import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import C002 from '@/components/C002'
import C003 from '@/components/C003'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/c002',
    name: 'C002',
    component: C002
  },
  {
    path: '/c003',
    name: 'C003',
    component: C003
  }
  ]
})
