// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuefire from 'vuefire'
import VueResource from 'vue-resource'
import firebase from './services/firebase'
import VueAnalytics from 'vue-analytics'

Vue.use(VueResource)
Vue.use(Vuefire)
Vue.use(VueAnalytics, {
  id: 'UA-101944993-1',
  router
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cat: firebase.database.ref('cat').orderByChild('created_at')
  },
  router,
  template: '<App/>',
  components: { App }
})
