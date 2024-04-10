<template>
  <div style="height: 400px; width: 100%; position: relative;">
    <cem-preview :xml-str="xmlStr" />
  </div>
</template>
<script>
import EmbeddedBpmnVue from '../index'
import { DEFAULT_XML } from '../utils/comm'
import Vue from 'vue'
Vue.use(EmbeddedBpmnVue)
export default {
  data() {
    return {
      // camunda bpmn xml
      xmlStr: ''
    }
  }
}
</script>