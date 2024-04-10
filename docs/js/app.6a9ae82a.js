(function(){"use strict";var e={9607:function(e,t,n){var a=n(2856),i=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"container"},[t("h2",[e._v(" 工作流演示 ")]),t("div",{staticClass:"button-group mb-20"},[t("button",{class:["button",1===e.mode?"active":""],on:{click:()=>{e.mode=1}}},[e._v("预览演示")]),t("button",{class:["button",2===e.mode?"active":""],on:{click:()=>{e.mode=2}}},[e._v("控制台演示")])]),t("div",{staticStyle:{height:"500px",width:"100%",position:"relative",border:"1px solid #ddd",margin:"0 auto"}},[1===e.mode?t("cem-preview",{attrs:{"xml-str":e.xmlStr}}):e._e(),2===e.mode?t("cem-dashboard",{attrs:{"xml-str":e.dashboardXml,svgFlag:"",minimapFlag:""}}):e._e()],1)])])},o=[];const r='<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0i2qljn" targetNamespace="http://bpmn.io/schema/bpmn" xmlns:modeler="http://camunda.org/schema/modeler/1.0" exporter="Camunda Modeler" exporterVersion="5.0.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">\n  <bpmn:process id="Process_1mvxii1" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1" />\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1mvxii1">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="179" y="159" width="36" height="36" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>',s='<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_13lkg79" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.0.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">\n  <bpmn:process id="Process_1gzzdn3" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1">\n      <bpmn:outgoing>Flow_1obunjw</bpmn:outgoing>\n    </bpmn:startEvent>\n    <bpmn:sequenceFlow id="Flow_1obunjw" sourceRef="StartEvent_1" targetRef="Activity_0obg1ow" />\n    <bpmn:userTask id="Activity_0obg1ow" name="申请人">\n      <bpmn:incoming>Flow_1obunjw</bpmn:incoming>\n      <bpmn:outgoing>Flow_1ntf0gy</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:task id="Activity_00pujnf" name="上级领导审批">\n      <bpmn:incoming>Flow_1ntf0gy</bpmn:incoming>\n      <bpmn:outgoing>Flow_15jsooe</bpmn:outgoing>\n    </bpmn:task>\n    <bpmn:sequenceFlow id="Flow_1ntf0gy" sourceRef="Activity_0obg1ow" targetRef="Activity_00pujnf" />\n    <bpmn:endEvent id="Event_0ihnult">\n      <bpmn:incoming>Flow_15jsooe</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="Flow_15jsooe" sourceRef="Activity_00pujnf" targetRef="Event_0ihnult" />\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1gzzdn3">\n      <bpmndi:BPMNEdge id="Flow_1obunjw_di" bpmnElement="Flow_1obunjw">\n        <di:waypoint x="215" y="117" />\n        <di:waypoint x="270" y="117" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="Flow_1ntf0gy_di" bpmnElement="Flow_1ntf0gy">\n        <di:waypoint x="370" y="117" />\n        <di:waypoint x="430" y="117" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="Flow_15jsooe_di" bpmnElement="Flow_15jsooe">\n        <di:waypoint x="530" y="117" />\n        <di:waypoint x="592" y="117" />\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="179" y="99" width="36" height="36" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Activity_1n7voxi_di" bpmnElement="Activity_0obg1ow">\n        <dc:Bounds x="270" y="77" width="100" height="80" />\n        <bpmndi:BPMNLabel />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Activity_00pujnf_di" bpmnElement="Activity_00pujnf">\n        <dc:Bounds x="430" y="77" width="100" height="80" />\n        <bpmndi:BPMNLabel />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="Event_0ihnult_di" bpmnElement="Event_0ihnult">\n        <dc:Bounds x="592" y="99" width="36" height="36" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>\n';var l={name:"App",data(){return{mode:1,dashboardXml:r,xmlStr:s}}},d=l,m=n(1656),p=(0,m.A)(d,i,o,!1,null,null,null),c=p.exports,u=function(){var e=this,t=e._self._c;return t("div",{ref:"canvas",staticClass:"canvas",staticStyle:{width:"100%",height:"100%"}})},v=[],h=(n(4114),{props:{xmlStr:{type:String,default:""}},data(){return{bpmnViewer:null,scale:.7,xmlUrl:"",bpmnInterval:null}},watch:{xmlStr(e,t){""!==e&&this.getWorkflowXml()}},mounted(){if(""!==this.xmlStr&&this.getWorkflowXml(),!window.BpmnModeler){const e=this;this.bpmnInterval=setInterval((function(){window.BpmnModeler&&(""!==e.xmlStr&&e.getWorkflowXml(),clearInterval(e.bpmnInterval),e.bpmnInterval=null)}),500)}},beforeDestroy(){this.bpmnInterval&&clearInterval(this.bpmnInterval)},methods:{getWorkflowXml(){this.xmlUrl=this.xmlStr,this.generatorWorkflowImg()},getHtmlAttr(e,t,n){const a=[],i="<"+t+"[^<>]*?\\s"+n+"=['\"]?(.*?)['\"]?\\s.*?>",o=e.match(new RegExp(i,"gi"));return o&&o.forEach((e=>{e&&a.push(e)})),a},async generatorWorkflowImg(){if(!window.BpmnModeler)return;const e=this;this.bpmnViewer&&this.bpmnViewer.destroy(),this.scale=1,this.bpmnViewer=new window.BpmnModeler({container:e.$refs.canvas,additionalModules:[{bendpoints:["value",{}],paletteProvider:["value",""],contextPadProvider:["value",""],labelEditingProvider:["value",""],move:["value",""]}]});try{await this.bpmnViewer.importXML(this.xmlUrl),this.bpmnViewer.off("element.click");const t=e.bpmnViewer.get("canvas");t.zoom("fit-viewport","auto");const n=[];e.setNodeColor(n,"nodeSuccess",t)}catch(t){}},setNodeColor(e,t,n){for(let a=0;a<e.length;a++)n.addMarker(e[a],t)},resetZoom(){this.scale=.75,this.$nextTick((()=>{this.bpmnViewer.get("canvas").zoom(this.scale)}))},handleZoom(e){e<0&&this.scale<.5||(this.scale+=e,this.$nextTick((()=>{this.bpmnViewer.get("canvas").zoom(this.scale)})))}}}),g=h,b=(0,m.A)(g,u,v,!1,null,"4fe9b67b",null),f=b.exports,w=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100%",height:"100%",display:"flex"}},[t("div",{staticClass:"cmda-palette",staticStyle:{flex:"1",position:"relative"}},[t("div",{ref:"canvasDashboard",staticClass:"canvas"}),t("div",{staticClass:"buttons",style:[{right:e.buttonGroupFloatRight,top:e.buttonGroupFloatTop}]},[e.bpmnFlag?t("li",[t("a",{ref:"saveXML",attrs:{href:"javascript:",title:"保存为bpmn"}},[e._v(e._s(e.customTranslate("xml")))])]):e._e(),e.svgFlag?t("li",[t("a",{ref:"saveSvg",attrs:{href:"javascript:",title:"保存为svg"}},[e._v(e._s(e.customTranslate("svg")))])]):e._e(),e.deployFlag?t("li",[t("button",{on:{click:e.workflowDeploy}})]):e._e()])]),t("div",{staticStyle:{width:"300px",position:"relative"}},[t("div",{ref:"cmdaProperties",staticStyle:{position:"absolute",top:"0px",right:"0px",left:"0px",bottom:"10px"}})])])},y=[];const E='<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0i2qljn" targetNamespace="http://bpmn.io/schema/bpmn" xmlns:modeler="http://camunda.org/schema/modeler/1.0" exporter="Camunda Modeler" exporterVersion="5.0.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">\n  <bpmn:process id="Process_1mvxii1" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1" />\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1mvxii1">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="179" y="159" width="36" height="36" />\n      </bpmndi:BPMNShape>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>\n',x=(e,t,n="script")=>{var a=document.createElement(n);"script"===n&&(a.type="text/javascript"),"link"===n&&(a.rel="stylesheet"),a.readyState?a.onreadystatechange=function(){"complete"!=a.readyState&&"loaded"!=a.readyState||t&&t()}:a.onload=function(){t&&t()},"script"===n&&(a.src=e),"link"===n&&(a.href=e),document.head.appendChild(a)},C={"Activate the global connect tool":"激活全局连接工具","Activate global connect tool":"激活全局连接工具","Append {type}":"追加 {type}","Append EndEvent":"追加 结束事件 ","Append Task":"追加 任务","Append Gateway":"追加 网关","Append Intermediate/Boundary Event":"追加 中间/边界 事件","Add Lane above":"在上面添加道","Add lane above":"在上面添加道","Divide into two Lanes":"分割成两个道","Divide into two lanes":"分割成两个道","Divide into three Lanes":"分割成三个道","Divide into three lanes":"分割成三个道","Add Lane below":"在下面添加道","Add lane below":"在下面添加道","Append compensation activity":"追加补偿活动","Change type":"修改类型","Connect using Association":"使用关联连接","Connect using Sequence/MessageFlow or Association":"使用顺序/消息流或者关联连接","Connect using DataInputAssociation":"使用数据输入关联连接",Remove:"移除","Activate the hand tool":"激活抓手工具","Activate hand tool":"激活抓手工具","Activate the lasso tool":"激活套索工具","Activate lasso tool":"激活套索工具","Activate the create/remove space tool":"激活创建/删除空间工具","Activate create/remove space tool":"激活创建/删除空间工具","Create expanded SubProcess":"创建扩展子过程","Create expanded sub-process":"创建扩展子过程","Create IntermediateThrowEvent/BoundaryEvent":"创建中间抛出事件/边界事件",Participants:"参与者","Create Pool/Participant":"创建池/参与者","Change element":"更换元素","Expanded pool/participant":"扩展池/参与者","Empty pool/participant":"清空池/参与者","Create pool/participant":"创建池/参与者","Parallel Multi Instance":"并行多重事件","Sequential Multi Instance":"时序多重事件",DataObjectReference:"数据对象参考",DataStoreReference:"数据存储参考",Data:"数据",Loop:"循环","Ad-hoc":"即席","Create {type}":"创建 {type}","Create Task":"创建任务","Create task":"创建任务","Create StartEvent":"创建开始事件","Create start event":"创建开始事件","Create EndEvent":"创建结束事件","Create end event":"创建结束事件","Create Group":"创建组",Task:"任务",Tasks:"任务",TASK:"任务","Send Task":"发送任务","Send task":"发送任务","Receive Task":"接收任务","Receive task":"接收任务","User Task":"用户任务","User task":"用户任务","Manual Task":"手工任务","Manual task":"手工任务","Business Rule Task":"业务规则任务","Business rule task":"业务规则任务","Service Task":"服务任务","Service task":"服务任务","Script Task":"脚本任务","Script task":"脚本任务","Call Activity":"调用活动","Call activity":"调用活动","Sub Process (collapsed)":"子流程（折叠的）","Sub-process (collapsed)":"子流程（折叠的）","Sub Process (expanded)":"子流程（展开的）","Sub-process (expanded)":"子流程（展开的）","Start Event":"开始事件","Start event":"开始事件","START EVENT":"开始事件",StartEvent:"开始事件","Intermediate Throw Event":"中间事件","End Event":"结束事件","End event":"结束事件",EndEvent:"结束事件","Create Gateway":"创建网关","Create gateway":"创建网关",Events:"事件",GateWay:"网关",Gateways:"网关","Create Intermediate/Boundary Event":"创建中间/边界事件","Create intermediate/boundary event":"创建中间/边界事件","Boundary event":"边界事件","Intermediate throw event":"中间抛送事件","Message intermediate throw event":"消息中间抛送事件","Message intermediate catch event":"消息中间捕获事件","Timer intermediate catch event":"定时中间捕获事件","Message Start Event":"消息开始事件","Message start event":"消息开始事件","Timer Start Event":"定时开始事件","Timer start event":"定时开始事件","Conditional Start Event":"条件开始事件","Conditional start event":"条件开始事件","Signal Start Event":"信号开始事件","Signal start event":"信号开始事件","Error Start Event":"错误开始事件","Escalation Start Event":"升级开始事件","Compensation Start Event":"补偿开始事件","Message Start Event (non-interrupting)":"消息开始事件（非中断）","Timer Start Event (non-interrupting)":"定时开始事件（非中断）","Conditional Start Event (non-interrupting)":"条件开始事件（非中断）","Signal Start Event (non-interrupting)":"信号开始事件（非中断）","Escalation Start Event (non-interrupting)":"升级开始事件（非中断）","Message Intermediate Catch Event":"消息中间捕获事件","Message Intermediate Throw Event":"消息中间抛出事件","Timer Intermediate Catch Event":"定时中间捕获事件","Escalation Intermediate Throw Event":"升级中间抛出事件","Escalation intermediate throw event":"升级中间抛出事件","Conditional Intermediate Catch Event":"条件中间捕获事件","Conditional intermediate catch event":"条件中间捕获事件","Link Intermediate Catch Event":"链接中间捕获事件","Link intermediate catch event":"链接中间捕获事件","Link Intermediate Throw Event":"链接中间抛出事件","Link intermediate throw event":"链接中间抛出事件","Compensation Intermediate Throw Event":"补偿中间抛出事件","Compensation intermediate throw event":"补偿中间抛出事件","Signal Intermediate Catch Event":"信号中间捕获事件","Signal intermediate catch event":"信号中间捕获事件","Signal Intermediate Throw Event":"信号中间抛出事件","Signal intermediate throw event":"信号中间抛出事件","Message End Event":"消息结束事件","Message end event":"消息结束事件","Escalation End Event":"定时结束事件","Escalation end event":"定时结束事件","Error End Event":"错误结束事件","Error end event":"错误结束事件","Cancel End Event":"取消结束事件","Cancel end event":"取消结束事件","Compensation End Event":"补偿结束事件","Compensation end event":"补偿结束事件","Signal End Event":"信号结束事件","Signal end event":"信号结束事件","Terminate End Event":"终止结束事件","Terminate end event":"终止结束事件","Message Boundary Event":"消息边界事件","Message boundary event":"消息边界事件","Message Boundary Event (non-interrupting)":"消息边界事件（非中断）","Message boundary event (non-interrupting)":"消息边界事件（非中断）","Timer Boundary Event":"定时边界事件","Timer boundary event":"定时边界事件","Timer Boundary Event (non-interrupting)":"定时边界事件（非中断）","Timer boundary event (non-interrupting)":"定时边界事件（非中断）","Escalation Boundary Event":"升级边界事件","Escalation boundary event":"升级边界事件","Escalation Boundary Event (non-interrupting)":"升级边界事件（非中断）","Escalation boundary event (non-interrupting)":"升级边界事件（非中断）","Conditional Boundary Event":"条件边界事件","Conditional boundary event":"条件边界事件","Conditional Boundary Event (non-interrupting)":"条件边界事件（非中断）","Conditional boundary event (non-interrupting)":"条件边界事件（非中断）","Error Boundary Event":"错误边界事件","Error boundary event":"错误边界事件","Cancel Boundary Event":"取消边界事件","Cancel boundary event":"取消边界事件","Signal Boundary Event":"信号边界事件","Signal boundary event":"信号边界事件","Signal Boundary Event (non-interrupting)":"信号边界事件（非中断）","Signal boundary event (non-interrupting)":"信号边界事件（非中断）","Compensation Boundary Event":"补偿边界事件","Compensation boundary event":"补偿边界事件","Exclusive Gateway":"互斥网关","Exclusive gateway":"互斥网关","Parallel Gateway":"并行网关","Parallel gateway":"并行网关","Inclusive Gateway":"相容网关","Inclusive gateway":"相容网关","Complex Gateway":"复杂网关","Complex gateway":"复杂网关","Event based Gateway":"事件网关","Event-based gateway":"事件网关",Transaction:"转运","Sub Process":"子流程","Sub-processes":"子流程","Event Sub Process":"事件子流程","Event sub-process":"事件子流程","Collapsed Pool":"折叠池","Expanded Pool":"展开池","no parent for {element} in {parent}":"在{parent}里，{element}没有父类","no shape type specified":"没有指定的形状类型","flow elements must be children of pools/participants":"流元素必须是池/参与者的子类","out of bounds release":"out of bounds release","more than {count} child lanes":"子道大于{count} ","element required":"元素不能为空","diagram not part of bpmn:Definitions":"流程图不符合bpmn规范","no diagram to display":"没有可展示的流程图","no process or collaboration to display":"没有可展示的流程/协作","element {element} referenced by {referenced}#{property} not yet drawn":"由{referenced}#{property}引用的{element}元素仍未绘制","already rendered {element}":"{element} 已被渲染","failed to import {element}":"导入{element}失败",Id:"编号",Name:"名称",General:"常规",Details:"详情","Message Name":"消息名称",Message:"消息",Initiator:"创建者","Asynchronous Continuations":"持续异步","Asynchronous continuations":"持续异步","Asynchronous Before":"异步前","Asynchronous before":"异步前","Asynchronous After":"异步后","Asynchronous after":"异步后","Job Configuration":"工作配置","Job execution":"工作配置",Exclusive:"排除","Job Priority":"工作优先级","Retry Time Cycle":"重试时间周期",Documentation:"文档","Element Documentation":"元素文档","Element documentation":"元素文档","History Configuration":"历史配置","History cleanup":"历史清理","History Time To Live":"历史的生存时间","Time to live":"历史的生存时间",Forms:"表单","Form Key":"表单key","Form Fields":"表单字段","Business Key":"业务key","Form Field":"表单字段",ID:"编号",Type:"类型",Label:"名称","Default Value":"默认值",Validation:"校验","Add Constraint":"添加约束",Config:"配置",Properties:"属性","Add Property":"添加属性",Value:"值",Add:"添加",Values:"值","Add Value":"添加值",Listeners:"监听器","Execution Listener":"执行监听","Execution listeners":"执行监听",start:"开头",end:"结尾","Event Type":"事件类型","Event type":"事件类型","Listener Type":"监听器类型","Listener type":"监听器类型","Java Class":"Java类","Java class":"Java类",String:"字符串",List:"列表",Map:"集合(键值对)",Expression:"表达式","String or expression":"字符串或表达式","Must provide a value":"必须提供一个值","Delegate Expression":"代理表达式","Delegate expression":"代理表达式",Script:"脚本","Script Format":"脚本格式","Script Type":"脚本类型","Inline Script":"内联脚本","External Script":"外部脚本",Resource:"资源","Field Injection":"字段注入","Field injection":"字段注入",Extensions:"扩展","Extension properties":"扩展属性","Input/Output":"输入/输出","Input Parameters":"输入参数","Output Parameters":"输出参数",Parameters:"参数","Output Parameter":"输出参数","Timer Definition Type":"定时器定义类型","Timer Definition":"定时器定义",Date:"日期",Duration:"持续",Cycle:"循环",Signal:"信号","Signal Name":"信号名称",Escalation:"升级",Error:"错误","Link Name":"链接名称",Condition:"条件名称","Variable Name":"变量名称","Process variable name":"流程变量名称","Local variable name":"本地变量名称","Assignment type":"指派类型","User assignment":"用户指派","Variable Event":"变量事件","Specify more than one variable change event as a comma separated list.":"多个变量事件以逗号隔开","Wait for Completion":"等待完成","Activity Ref":"活动参考","Version Tag":"版本标签","Version tag":"版本标签",Executable:"可执行文件","External Task Configuration":"扩展任务配置","External task":"扩展任务配置","Task Priority":"任务优先级",External:"外部",Connector:"连接器","Must configure Connector":"必须配置连接器","Connector Id":"连接器编号",Implementation:"实现方式","Field Injections":"字段注入","Field injections":"字段注入",Fields:"字段","Result Variable":"结果变量",Topic:"主题","Configure Connector":"配置连接器","Input Parameter":"输入参数",Inputs:"输入参数",Outputs:"输出参数",Assignee:"代理人","Candidate Users":"候选用户","Candidate users":"候选用户","Candidate Groups":"候选组","Candidate groups":"候选组","Due Date":"到期时间","Due date":"到期时间","Follow Up Date":"跟踪日期","Follow up date":"跟踪日期",Priority:"优先级","The follow up date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00","The due date as an EL expression (e.g. ${someDate} or an ISO date (e.g. 2015-06-26T09:54:00)":"跟踪日期必须符合EL表达式，如： ${someDate} ,或者一个ISO标准日期，如：2015-06-26T09:54:00",Variables:"变量","Candidate Starter Configuration":"候选开始配置","Candidate starter":"候选开始配置","Task Listener":"任务监听器","Task listeners":"任务监听器","Candidate Starter Groups":"候选开始组","Candidate starter groups":"候选开始组","Candidate Starter Users":"候选开始用户","Candidate starter users":"候选开始用户","Tasklist Configuration":"任务列表配置",Tasklist:"任务列表配置",Startable:"启动","Specify more than one group as a comma separated list.":"指定多个组,用逗号分隔","Specify more than one user as a comma separated list.":"指定多个用户,用逗号分隔","This maps to the process definition key.":"这会映射为流程定义的键","Open minimap":"打开小地图","Close minimap":"关闭小地图","CallActivity Type":"调用活动类型","Condition Type":"条件类型","Condition Expression":"条件表达式","Create UserTask":"创建用户任务","Create CallActivity":"创建调用活动","Called Element":"调用元素","Create element":"创建元素","Create DataObjectReference":"创建数据对象引用","Create data object reference":"创建数据对象引用","Data object reference":"数据对象引用","Create DataStoreReference":"创建数据存储引用","Create data store reference":"创建数据存储引用","Data store reference":"数据存储引用","Multi Instance":"多实例","Multi-instance":"多实例","Loop Cardinality":"实例数量","Loop cardinality":"实例数量",Collection:"任务参与人列表","Element Variable":"元素变量","Element variable":"元素变量","Completion Condition":"完成条件","Completion condition":"完成条件"};function S(e,t){return t=t||{},e=C[e]||e,e.replace(/{([^}]+)}/g,(function(e,n){return t[n]||"{"+n+"}"}))}var _={props:{xmlStr:{type:String,default:null},bpmnFlag:{type:Boolean,default:!0},svgFlag:{type:Boolean,default:!1},deployFlag:{type:Boolean,default:!1},minimapFlag:{type:Boolean,default:!1}},data(){return{bpmnViewer:null,scale:.7,xmlUrl:"",bpmnInterval:null}},watch:{xmlStr(e,t){""!==e&&this.getWorkflowXml()}},computed:{isZhCn(){return"zh-cn"===this.$camundaEebConfig.locale},buttonGroupFloatRight(){return this.minimapFlag?this.isZhCn?"116px":"140px":"20px"},buttonGroupFloatTop(){return this.minimapFlag?this.isZhCn?"25px":"26px":"20px"}},mounted(){if(window.BpmnModeler)this.initWorkflow();else{const e=this;this.bpmnInterval=setInterval((function(){window.BpmnModeler&&(e.initWorkflow(),clearInterval(e.bpmnInterval),e.bpmnInterval=null)}),500)}},beforeDestroy(){this.bpmnInterval&&clearInterval(this.bpmnInterval)},methods:{initWorkflow(){""!==this.xmlStr&&null!==this.xmlStr?this.getWorkflowXml():(this.xmlUrl=E,this.generatorWorkflowImg())},customTranslate(e){let t="";switch(e){case"xml":t=this.isZhCn?"下载BPMN":"Download BPMN";break;case"svg":t=this.isZhCn?"下载SVG":"Download SVG";case"deploy":t=this.isZhCn?"流程发布":"Process Deploy";default:break}return t},getWorkflowXml(){this.xmlUrl=this.xmlStr,this.generatorWorkflowImg()},getHtmlAttr(e,t,n){const a=[],i="<"+t+"[^<>]*?\\s"+n+"=['\"]?(.*?)['\"]?\\s.*?>",o=e.match(new RegExp(i,"gi"));return o&&o.forEach((e=>{e&&a.push(e)})),a},async generatorWorkflowImg(){if(!window.BpmnModeler)return;const e=this;this.bpmnViewer&&this.bpmnViewer.destroy(),this.scale=1;const t={};this.minimapFlag||(t.minimap=["value",""]),this.isZhCn&&(t.translate=["value",S]),this.bpmnViewer=new window.BpmnModeler({container:e.$refs.canvasDashboard,propertiesPanel:{parent:e.$refs.cmdaProperties},additionalModules:[t]});try{await this.bpmnViewer.importXML(this.xmlUrl);const t=e.bpmnViewer.get("canvas");t.zoom("fit-viewport","auto");const n=[];e.setNodeColor(n,"nodeSuccess",t),this.addBpmnListener()}catch(n){}},setNodeColor(e,t,n){for(let a=0;a<e.length;a++)n.addMarker(e[a],t)},handlerRedo(){this.bpmnModeler.get("commandStack").redo()},handlerUndo(){this.bpmnModeler.get("commandStack").undo()},resetZoom(){this.scale=.75,this.$nextTick((()=>{this.bpmnViewer.get("canvas").zoom(this.scale)}))},handleZoom(e){e<0&&this.scale<.5||(this.scale+=e,this.$nextTick((()=>{this.bpmnViewer.get("canvas").zoom(this.scale)})))},async addBpmnListener(){const e=this,t=this.$refs.saveXML,n=this.$refs.saveSvg;async function a(){try{const t=await e.saveSVG(),{svg:a}=t;e.setEncoded(n,"ops-coffee.svg",a)}catch(a){console.log(a)}try{const n=await e.saveXML(),{xml:a}=n,i=e.getFilename(a);e.setEncoded(t,`${i}.bpmn`,a)}catch(a){console.log(a)}}a(),this.bpmnViewer.on("commandStack.changed",a)},async saveSVG(e){try{const t=await this.bpmnViewer.saveSVG(e);return t}catch(t){console.log(t)}},async saveXML(e){try{const t=await this.bpmnViewer.saveXML({format:!0},e);return t}catch(t){console.log(t)}},async workflowDeploy(){try{const e=await this.bpmnViewer.saveXML({format:!0},null);this.$emit("deploy",e.xml)}catch(e){console.log(e)}},setEncoded(e,t,n){const a=encodeURIComponent(n);n&&(e.href="data:application/bpmn20-xml;charset=UTF-8,"+a,e.download=t)},getFilename(e){let t=e.indexOf("process"),n=e.substr(t,e.indexOf(">"));return n=n.substr(n.indexOf("id")+4),n=n.substr(0,n.indexOf('"')),n}}},P=_,M=(0,m.A)(P,w,y,!1,null,"a0fd7688",null),B=M.exports;const k={__downloadVersion:"4.5.0",__installed:!1,__Vue:null,vm:null,__config:null,install(e,t={}){if(!this.__installed){if("version"in t){let e=(t.version||"").toLowerCase();e.indexOf("v")>=0&&(e=e.substring(e.indexOf("v")+1)),""!==e&&(k.__downloadVersion=e)}this.__installed=!0,this.__Vue=e,window.BpmnModeler||(x(`https://unpkg.com/camunda-bpmn-js@${k.__downloadVersion}/dist/assets/camunda-platform-modeler.css`,null,"link"),x(`https://unpkg.com/camunda-bpmn-js@${k.__downloadVersion}/dist/camunda-platform-modeler.production.min.js`)),e.prototype.$camundaEebConfig={version:k.__downloadVersion,locale:t.locale||"en"},e.component("cem-preview",f),e.component("cem-dashboard",B)}}};var T=k;a.Ay.config.productionTip=!1,a.Ay.use(T,{}),new a.Ay({render:e=>e(c)}).$mount("#app")}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,i,o){if(!a){var r=1/0;for(m=0;m<e.length;m++){a=e[m][0],i=e[m][1],o=e[m][2];for(var s=!0,l=0;l<a.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(m--,1);var d=i();void 0!==d&&(t=d)}}return t}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[a,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,o,r=a[0],s=a[1],l=a[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var m=l(n)}for(t&&t(a);d<r.length;d++)o=r[d],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(m)},a=self["webpackChunkexample"]=self["webpackChunkexample"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(9607)}));a=n.O(a)})();
//# sourceMappingURL=app.6a9ae82a.js.map