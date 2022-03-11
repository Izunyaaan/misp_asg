import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDSDrsN2SyxAdfP5PCk3bK2h_O7nj5wOgk',
    libraries: 'places',
  }
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
