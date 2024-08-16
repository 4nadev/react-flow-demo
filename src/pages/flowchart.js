import React, { useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  addEdge,
  removeElements,
  updateEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from 'react-flow-renderer';

const initialNodes = [
  { id: '1', data: { label: 'Node 1' }, position: { x: 100, y: 100 }, draggable: true },
  { id: '2', data: { label: 'Node 2' }, position: { x: 300, y: 100 }, draggable: true },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
];

const FlowChart = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  const onElementsRemove = (elementsToRemove) => setNodes((nds) => removeElements(elementsToRemove, nds));
  const onEdgeUpdate = (oldEdge, newConnection) => setEdges((eds) => updateEdge(oldEdge, newConnection, eds));
  const onNodeChange = (changes) => setNodes((nds) => applyNodeChanges(changes, nds));
  const onEdgeChange = (changes) => setEdges((eds) => applyEdgeChanges(changes, eds));

  return (
    <div className="w-full h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onElementsRemove={onElementsRemove}
        onEdgeUpdate={onEdgeUpdate}
        onNodeChange={onNodeChange}
        onEdgeChange={onEdgeChange}
        style={{ width: '100%', height: '100%' }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default FlowChart;
