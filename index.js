import Preview from './components/preview.vue'
import Dashboard from './components/dashboard.vue'
import { loadScript } from './utils/comm'

const camundaInstance = {
  __downloadVersion: '4.5.0',
  __installed: false,
  __Vue: null,
  vm: null,
  __config: null,
  install (Vue, options = {}) {
    if (this.__installed) return
    if ('version' in options) {
      let configVersion = (options.version || '').toLowerCase()
      if (configVersion.indexOf('v') >= 0) {
        configVersion = configVersion.substring(configVersion.indexOf('v') + 1)
      }
      if (configVersion !== '') {
        camundaInstance.__downloadVersion = configVersion
      }
    }
    this.__installed = true
    this.__Vue = Vue
    if (!window.BpmnModeler) {
      loadScript(`https://unpkg.com/camunda-bpmn-js@${camundaInstance.__downloadVersion}/dist/assets/camunda-platform-modeler.css`, null, 'link')
      loadScript(`https://unpkg.com/camunda-bpmn-js@${camundaInstance.__downloadVersion}/dist/camunda-platform-modeler.production.min.js`)
    }
    Vue.prototype.$camundaEebConfig = {
      version: camundaInstance.__downloadVersion,
      // en 英文 zh-cn 中文
      locale: options.locale || 'en'
    }
    Vue.component('cem-preview', Preview)
    Vue.component('cem-dashboard', Dashboard)
  },
}

export default camundaInstance
