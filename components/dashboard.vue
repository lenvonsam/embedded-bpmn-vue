<template>
  <div style="width: 100%; height: 100%; display: flex;">
    <div class="cmda-palette" style="flex: 1; position: relative;">
      <div ref="canvasDashboard" class="canvas"></div>
      <div class="buttons" :style="[{right: buttonGroupFloatRight, top: buttonGroupFloatTop}]">
        <li v-if="bpmnFlag">
          <a href="javascript:" ref="saveXML" title="保存为bpmn">{{ customTranslate('xml') }}</a>
        </li>
        <li v-if="svgFlag">
          <a href="javascript:" ref="saveSvg" title="保存为svg">{{ customTranslate('svg') }}</a>
        </li>
        <li v-if="deployFlag">
          <button @click="workflowDeploy"></button>
        </li>
      </div>
    </div>
    <div style="width: 300px; position: relative;">
    <div
      ref="cmdaProperties"
      style="
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 10px;
      "
    ></div>
</div>
  </div>
</template>

<script>
import {DEFAULT_XML} from '../utils/comm'
import customTranslate from '../utils/customTranslate'

export default {
  props: {
    xmlStr: {
      type: String,
      default: null
    },
    bpmnFlag: {
      type: Boolean,
      default: true
    },
    svgFlag: {
      type: Boolean,
      default: false
    },
    deployFlag: {
      type: Boolean,
      default: false
    },
    minimapFlag: {
      type: Boolean,
      default: false
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
        this.getWorkflowXml()
      }
    }
  },
  computed: {
    isZhCn() {
      return this.$camundaEebConfig.locale === 'zh-cn'
    },
    buttonGroupFloatRight() {
      if (this.minimapFlag) {
        if (this.isZhCn) {
          return '116px'
        } else {
          return '140px'
        }
      } 
      else {
        return '20px'
      }
    },
    buttonGroupFloatTop() {
      if (this.minimapFlag) {
        if (this.isZhCn) {
          return '25px'
        } else {
          return '26px'
        }
      } 
      else {
        return '20px'
      }
    }
  },
  mounted() {
    if (!window.BpmnModeler) {
      const me = this
      this.bpmnInterval = setInterval(function() {
        if (window.BpmnModeler) {
          me.initWorkflow()
          clearInterval(me.bpmnInterval)
          me.bpmnInterval = null
        }
      }, 500)
    } else {
      this.initWorkflow()
    }
  },
  beforeDestroy() {
    if (this.bpmnInterval) {
      clearInterval(this.bpmnInterval)
    }
  },
  methods: {
    initWorkflow() {
      if (this.xmlStr !== '' && this.xmlStr !== null) {
        this.getWorkflowXml()
      } else {
        // 设置默认开始节点
        this.xmlUrl = DEFAULT_XML
        this.generatorWorkflowImg()
      }
    },
    customTranslate(type) {
      let result = ''
      switch(type) {
        case 'xml':
          if (this.isZhCn) {
            result = '下载BPMN'
          } else {
            result = 'Download BPMN'
          }
          break
        case 'svg':
          if (this.isZhCn) {
            result = '下载SVG'
          } else {
            result = 'Download SVG'
          }
        case 'deploy':
        if (this.isZhCn) {
            result = '流程发布'
          } else {
            result = 'Process Deploy'
          }
        default:
          break
      }
      return result
    },
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
      const additionConfig = {
        // 禁止拖动线
            // bendpoints: ['value', {}],
            // 禁用左侧面板
            // paletteProvider: ['value', ''],
            // 禁止点击节点出现contextPad
            // contextPadProvider: ['value', ''],
            // 禁止双击节点出现label编辑框
            // labelEditingProvider: ['value', ''],
            // 禁用单个图形拖动
            // move: ['value', ''],
            // 禁用node编辑
            // interactionEvents: ['value', ''],
      }
      if (!this.minimapFlag) {
        additionConfig.minimap = ['value', '']
      }
      if (this.isZhCn) {
        additionConfig.translate = ['value', customTranslate]
      }
      this.bpmnViewer = new window.BpmnModeler({
        container: self.$refs.canvasDashboard,
        propertiesPanel: {
          parent: self.$refs.cmdaProperties
        },
        additionalModules: [
          additionConfig
        ],
      })
      try {
        console.log('import xml:>>', this.xmlUrl)
        await this.bpmnViewer.importXML(this.xmlUrl)
        const canvas = self.bpmnViewer.get('canvas')
        canvas.zoom('fit-viewport', 'auto')
        // nodeCodes为需要设置高亮颜色的部分的id的集合（xml文件中<flowNodeRef>****</flowNodeRef>标签里的部分），这个数据也是从接口获取，这里从xml中随便取出几个测试用
        const nodeCodes = []
        // 调用设置高亮颜色class方法,这里可以根据接口获取的id集合情况，对不同的部分设置不同的class名，然后在css中设置样式
        self.setNodeColor(nodeCodes, 'nodeSuccess', canvas)
        this.addBpmnListener()
        // this.bpmnViewer.get("minimap").toggle()
      } catch (e) {}
    },
    // 设置高亮颜色的class
    setNodeColor(nodeCodes, colorClass, canvas) {
      for (let i = 0; i < nodeCodes.length; i++) {
        canvas.addMarker(nodeCodes[i], colorClass)
      }
    },
    // 恢复
    handlerRedo() {
      this.bpmnModeler.get("commandStack").redo();
    },
    // 撤销
    handlerUndo() {
      this.bpmnModeler.get("commandStack").undo();
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
    async addBpmnListener() {
      const that = this;
      const downloadLink = this.$refs.saveXML;
      const downloadSvgLink = this.$refs.saveSvg;

      async function opscoffee() {
        try {
          const result = await that.saveSVG();
          const { svg } = result;

          that.setEncoded(downloadSvgLink, "ops-coffee.svg", svg);
        } catch (err) {
          console.log(err);
        }

        try {
          const result = await that.saveXML();
          const { xml } = result;
          const fileName = that.getFilename(xml)

          that.setEncoded(downloadLink, `${fileName}.bpmn`, xml);
        } catch (err) {
          console.log(err);
        }
      }

      opscoffee();
      this.bpmnViewer.on("commandStack.changed", opscoffee);
    },
    async saveSVG(done) {
      try {
        const result = await this.bpmnViewer.saveSVG(done);
        return result;
      } catch (err) {
        console.log(err);
      }
    },
    async saveXML(done) {
      try {
        const result = await this.bpmnViewer.saveXML({ format: true }, done);
        return result;
      } catch (err) {
        console.log(err);
      }
    },
    async workflowDeploy() {
      console.log('workflow deploy click')
      try {
        const result = await this.bpmnViewer.saveXML({ format: true }, null);
        console.log('deploy xml:>>', result)
        this.$emit('deploy', result.xml)
      } catch(err) {
        console.log(err)
      }
    },
    setEncoded(link, name, data) {
      const encodedData = encodeURIComponent(data);

      if (data) {
        link.href = "data:application/bpmn20-xml;charset=UTF-8," + encodedData;
        link.download = name;
      }
    },
    getFilename(xml) {
      let start = xml.indexOf("process");
      let filename = xml.substr(start, xml.indexOf(">"));
      filename = filename.substr(filename.indexOf("id") + 4);
      filename = filename.substr(0, filename.indexOf('"'));
      return filename;
    }
  },
}
</script>

<style scoped>
@import url(../utils/comm.css);
.cmda-palette .buttons {
  position: absolute;
  right: 20px;
  top: 20px;
}
.cmda-palette .buttons li {
  display: inline-block;
  margin: 5px;
}
.cmda-palette .buttons li a,
.cmda-palette .buttons li button {
  color: #333;
  background: #fff;
  cursor: pointer;
  padding: 8px;
  border: 1px solid #ccc;
  text-decoration: none;
}


</style>../shots/utils/comm../shots/utils/customTranslate
