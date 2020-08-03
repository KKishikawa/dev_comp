import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VueMoment from 'vue-moment'
import moment from 'moment'
require('moment/locale/ja')

Vue.config.productionTip = false

Vue.use(VueMoment, {
  moment
})

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
