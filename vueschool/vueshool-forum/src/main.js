// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import firebase from 'firebase'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAYmlGZzRcMwDjo8HG9YhwJJzMbyyNPXus',
  authDomain: 'vue-school-forum-4bd38.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-4bd38.firebaseio.com',
  projectId: 'vue-school-forum-4bd38',
  storageBucket: '',
  messagingSenderId: '918573349399',
  appId: '1:918573349399:web:62c793e0cad8ff32'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
