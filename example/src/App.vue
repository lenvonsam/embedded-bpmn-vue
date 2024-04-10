<template>
<div id="app">
    <div class="container">
    <h2> 
      工作流演示
    </h2>
    <div class="button-group mb-20">
      <button :class="['button', mode === 1 ? 'active': '']" @click="() => {mode = 1}">预览演示</button>
      <button :class="['button', mode === 2 ? 'active': '']" @click="() => {mode = 2}">控制台演示</button>
    </div>
    <div style="height: 500px; width: 100%; position: relative; border: 1px solid #ddd; margin: 0 auto;">
      <cem-preview :xml-str="xmlStr" v-if="mode === 1"/>
      <cem-dashboard v-if="mode === 2" :xml-str="dashboardXml" svgFlag minimapFlag ></cem-dashboard>
    </div>
  </div>
</div>
</template>

<script>
import { DEFAULT_XML, DEFAULT_PREVIEW_XML } from './mock';
export default {
  name: 'App',
  data() {
    return {
      // 1 预览 2 控制台
      mode: 1,
      dashboardXml: DEFAULT_XML,
      xmlStr: DEFAULT_PREVIEW_XML
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
}
#app .container {
  max-width: 1024px;
  margin: 0 auto;
}

.mb-20 {
  margin-bottom: 20px;
}

#app .container .button-group {
  display: flex;
}
#app .container .button-group .button {
  padding: 5px 15px;
  border: 1px solid #cdcdcd;
  color: black;
  cursor: pointer;
}
#app .container .button-group .button.active {
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
}
</style>
