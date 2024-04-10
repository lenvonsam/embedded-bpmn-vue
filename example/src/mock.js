
export const DEFAULT_XML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_0i2qljn" targetNamespace="http://bpmn.io/schema/bpmn" xmlns:modeler="http://camunda.org/schema/modeler/1.0" exporter="Camunda Modeler" exporterVersion="5.0.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">
  <bpmn:process id="Process_1mvxii1" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1mvxii1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="159" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`

export const DEFAULT_PREVIEW_XML = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_13lkg79" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.0.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.17.0">
  <bpmn:process id="Process_1gzzdn3" isExecutable="true">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>Flow_1obunjw</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_1obunjw" sourceRef="StartEvent_1" targetRef="Activity_0obg1ow" />
    <bpmn:userTask id="Activity_0obg1ow" name="申请人">
      <bpmn:incoming>Flow_1obunjw</bpmn:incoming>
      <bpmn:outgoing>Flow_1ntf0gy</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:task id="Activity_00pujnf" name="上级领导审批">
      <bpmn:incoming>Flow_1ntf0gy</bpmn:incoming>
      <bpmn:outgoing>Flow_15jsooe</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="Flow_1ntf0gy" sourceRef="Activity_0obg1ow" targetRef="Activity_00pujnf" />
    <bpmn:endEvent id="Event_0ihnult">
      <bpmn:incoming>Flow_15jsooe</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_15jsooe" sourceRef="Activity_00pujnf" targetRef="Event_0ihnult" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1gzzdn3">
      <bpmndi:BPMNEdge id="Flow_1obunjw_di" bpmnElement="Flow_1obunjw">
        <di:waypoint x="215" y="117" />
        <di:waypoint x="270" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1ntf0gy_di" bpmnElement="Flow_1ntf0gy">
        <di:waypoint x="370" y="117" />
        <di:waypoint x="430" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_15jsooe_di" bpmnElement="Flow_15jsooe">
        <di:waypoint x="530" y="117" />
        <di:waypoint x="592" y="117" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="179" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1n7voxi_di" bpmnElement="Activity_0obg1ow">
        <dc:Bounds x="270" y="77" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_00pujnf_di" bpmnElement="Activity_00pujnf">
        <dc:Bounds x="430" y="77" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_0ihnult_di" bpmnElement="Event_0ihnult">
        <dc:Bounds x="592" y="99" width="36" height="36" />
      </bpmndi:BPMNShape>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>
`