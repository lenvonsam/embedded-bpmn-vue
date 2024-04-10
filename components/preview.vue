<template>
  <div ref="canvas" class="canvas" style="width: 100%; height: 100%;"></div>
</template>

<script>
export default {
  props: {
    xmlStr: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      bpmnViewer: null,
      scale: 0.7,
      xmlUrl: '',
      bpmnInterval: null
    }
  },
  watch: {
    xmlStr(newVal, oldVal) {
      if (newVal !== '') {
        console.log('xml str:>> val:>>', newVal)
        this.getWorkflowXml()
      }
    }
  },
  mounted() {
    if (this.xmlStr !== '') {
      this.getWorkflowXml()
    }
    if (!window.BpmnModeler) {
      const me = this
      this.bpmnInterval = setInterval(function() {
        if (window.BpmnModeler) {
          if (me.xmlStr !== '') {
            me.getWorkflowXml()
          }
          clearInterval(me.bpmnInterval)
          me.bpmnInterval = null
        }
      }, 500)
    }
  },
  beforeDestroy() {
    if (this.bpmnInterval) {
      clearInterval(this.bpmnInterval)
    }
  },
  methods: {
    getWorkflowXml() {
      this.xmlUrl = this.xmlStr
      this.generatorWorkflowImg()
    },
    // FIXME gateway特殊解析，暂时保留
    getHtmlAttr(source, element, attr) {
      const result = []
      const reg =
        '<' + element + '[^<>]*?\\s' + attr + '=[\'"]?(.*?)[\'"]?\\s.*?>'
      const matched = source.match(new RegExp(reg, 'gi'))

      matched &&
        matched.forEach(item => {
          item && result.push(item)
        })
      return result
    },
    async generatorWorkflowImg() {
      // 初始时清除图层
      if (!window.BpmnModeler) return
      const self = this
      this.bpmnViewer && this.bpmnViewer.destroy()
      // self.$refs.canvas.innerHTML = ''
      this.scale = 1 // 放大缩小比例
      // 初始化canvas
      this.bpmnViewer = new window.BpmnModeler({
        container: self.$refs.canvas,
        additionalModules: [
          {
            // 禁止拖动线
            bendpoints: ['value', {}],
            // 禁用左侧面板
            paletteProvider: ['value', ''],
            // 禁止点击节点出现contextPad
            contextPadProvider: ['value', ''],
            // 禁止双击节点出现label编辑框
            labelEditingProvider: ['value', ''],
            // 禁用单个图形拖动
            move: ['value', ''],
            // 禁用node编辑
            // interactionEvents: ['value', ''],
          },
        ],
      })
      try {
        await this.bpmnViewer.importXML(this.xmlUrl)
        this.bpmnViewer.off('element.click');
        const canvas = self.bpmnViewer.get('canvas')
        canvas.zoom('fit-viewport', 'auto')
        // nodeCodes为需要设置高亮颜色的部分的id的集合（xml文件中<flowNodeRef>****</flowNodeRef>标签里的部分），这个数据也是从接口获取，这里从xml中随便取出几个测试用
        const nodeCodes = []
        // 调用设置高亮颜色class方法,这里可以根据接口获取的id集合情况，对不同的部分设置不同的class名，然后在css中设置样式
        self.setNodeColor(nodeCodes, 'nodeSuccess', canvas)
      } catch (e) {}
    },
    // 设置高亮颜色的class
    setNodeColor(nodeCodes, colorClass, canvas) {
      for (let i = 0; i < nodeCodes.length; i++) {
        canvas.addMarker(nodeCodes[i], colorClass)
      }
    },
    resetZoom() {
      this.scale = 0.75
      this.$nextTick(() => {
        this.bpmnViewer.get('canvas').zoom(this.scale)
      })
    },
    // 放大缩小，这里尽量设置flag的值小一点，这样每次放大缩小不会很多，避免放大超出父元素
    handleZoom(flag) {
      // 放大缩小倍数flag可以自行设置
      if (flag < 0 && this.scale < 0.5) {
        return
      }
      this.scale += flag
      this.$nextTick(() => {
        this.bpmnViewer.get('canvas').zoom(this.scale)
      })
    },
  },
}
</script>

<style scoped>
.canvas {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0 25px;
}
.canvas .bjs-breadcrumbs,
.canvas .bjs-powered-by {
  display: none;
}
.canvas .nodeSuccess:not(.djs-connection) .djs-visual > :nth-child(1) {
  stroke: #f70e0e !important;
  stroke-width: 2px !important;
}
>>> .bjs-container > .bjs-powered-by,
>>> .bjs-container > .djs-container > .djs-minimap,
>>> .bjs-container > .djs-container > .djs-palette.open {
  display: none !important;
}
</style>
