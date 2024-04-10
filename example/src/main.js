import Vue from 'vue'
import App from './App.vue'
import EmbeddedBpmnVue from '../../index'

Vue.config.productionTip = false
Vue.use(EmbeddedBpmnVue, {
  locale: 'zh-cn'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
