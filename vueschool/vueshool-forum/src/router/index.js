import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/PageHome')
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: () => import('@/pages/PageCategory'),
      props: true
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: () => import('@/pages/PageForum'),
      props: true
    },
    {
      path: '/thread/create/:forumId',
      name: 'ThreadCreate',
      component: () => import('@/pages/PageThreadCreate'),
      props: true
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: () => import('@/pages/PageThreadShow'),
      props: true
    },
    {
      path: '/thread/:id/edit',
      name: 'ThreadEdit',
      component: () => import('@/pages/PageThreadEdit'),
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: () => import('@/pages/PageProfile'),
      props: true
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: () => import('@/pages/PageProfile'),
      props: {edit: true}
    },
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/pages/PageNotFound')
    }
  ],
  mode: 'history'
})
