import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import Amplify, * as AmplifyModules from "aws-amplify"
import { AmplifyPlugin } from "aws-amplify-vue"
import aws_exports from "./aws-exports"
import router from './router'
Amplify.configure(aws_exports)

Vue.use(AmplifyPlugin, AmplifyModules)
Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
